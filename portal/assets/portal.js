
(() => {
  const STORAGE_KEY = 'dingfelderPortalRequestsV36';
  const SESSION_KEY = 'dingfelderPortalSessionsV36';
  const WORKSPACES = {
    'urick': {
      code: 'URK',
      label: 'Urick Customer Workspace',
      loginPath: '/portal/urick/login.html',
      dashboardPath: '/portal/urick/dashboard.html',
      queuePath: '/portal/urick/approval-queue.html',
      requestPath: '/portal/urick/request-access.html'
    },
    'ia-motion': {
      code: 'IAM',
      label: 'IA Motion Partner Workspace',
      loginPath: '/portal/ia-motion/login.html',
      dashboardPath: '/portal/ia-motion/dashboard.html',
      queuePath: '/portal/ia-motion/approval-queue.html',
      requestPath: '/portal/ia-motion/request-access.html'
    }
  };


  const ROLE_PAGE_ACCESS = {
    customer_user: ['overview', 'dashboard', 'documents', 'work-requests', 'support', 'my-training'],
    customer_management: ['overview', 'dashboard', 'documents', 'uploads', 'work-requests', 'quote-requests', 'projects', 'support', 'my-training', ],
    vendor_user: ['overview', 'dashboard', 'documents', 'work-requests', 'quote-requests', 'support', 'my-training'],
    vendor_management: ['overview', 'dashboard', 'documents', 'uploads', 'work-requests', 'quote-requests', 'projects', 'support', 'my-training', ],
    dingfelder_support: ['overview', 'dashboard', 'documents', 'uploads', 'work-requests', 'quote-requests', 'projects', 'support', 'my-training', 'approval-queue'],
    dingfelder_admin: ['overview', 'dashboard', 'documents', 'uploads', 'work-requests', 'quote-requests', 'projects', 'support', 'my-training', 'approval-queue']
  };

  const path = window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  const workspaceKey = inferWorkspaceKey(path);
  const workspace = WORKSPACES[workspaceKey] || null;

  initNav();
  populateQueryFields();
  initRequestForms();
  initReceivedPage();
  initApprovalQueue();
  initLoginForms();
  initSessionBands();
  initHeaderSessionState();
  initLiveSessionResolution();
  initMobileNav();
  initLogoutLinks();
  initOperationalForms();
  initUploadShellForms();
  initLiveDocumentsPages();

  function inferWorkspaceKey(currentPath) {
    if (currentPath.includes('/portal/urick/')) return 'urick';
    if (currentPath.includes('/portal/ia-motion/')) return 'ia-motion';
    return null;
  }

  function initNav() {
    const currentKey = currentPageKey();
    document.querySelectorAll('[data-path]').forEach(link => {
      const target = link.getAttribute('data-path');
      if (!target) return;
      const targetKey = pageKeyFromHref(target);
      if (targetKey && targetKey === currentKey) {
        link.classList.add('active');
      }
    });
  }

  function populateQueryFields() {
    document.querySelectorAll('[data-request]').forEach(el => {
      const key = el.getAttribute('data-request');
      const value = params.get(key);
      if (value) el.textContent = value;
    });
  }

  function loadRequests() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) { return []; }
  }
  function saveRequests(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }
  function loadSessions() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || '{}');
    } catch (e) { return {}; }
  }
  function saveSessions(items) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(items));
  }
  function formatDate(iso) {
    if (!iso) return 'Now';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleString();
  }
  function makeId(code) {
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    const stamp = `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
    const rand = Math.floor(Math.random()*900 + 100);
    return `${code}-${stamp}-${rand}`;
  }
  function makeTempPassword(code, id) {
    const suffix = (id || '').replace(/[^0-9]/g, '').slice(-4) || String(Math.floor(Math.random()*9000 + 1000));
    return `${code.toLowerCase()}-${suffix}`;
  }
  function slugEmail(email) { return String(email || '').trim().toLowerCase(); }
  function statusBadge(status) {
    const cls = status === 'approved' ? 'good' : status === 'denied' ? 'warn' : 'dim';
    const label = status === 'approved' ? 'Approved' : status === 'denied' ? 'Denied' : 'Pending review';
    return `<span class="badge ${cls}">${label}</span>`;
  }

  function mapRequestedRole(label) {
    const normalized = String(label || '').trim().toLowerCase();
    if (normalized === 'customer user') return 'customer_user';
    if (normalized === 'customer management') return 'customer_management';
    if (normalized === 'partner user') return 'vendor_user';
    if (normalized === 'technical sales') return 'vendor_management';
    if (normalized === 'controls support') return 'vendor_management';
    if (normalized === 'dingfelder support') return 'dingfelder_support';
    return workspaceKey === 'ia-motion' ? 'vendor_user' : 'customer_user';
  }

  function mapFinancialVisibility(label) {
    const normalized = String(label || '').trim().toLowerCase();
    if (normalized === 'none required') return 'none';
    if (normalized === 'pos i issued') return 'own_po_only';
    if (normalized === 'quote items only') return 'own_po_only';
    if (normalized === 'customer-wide') return 'workspace_wide';
    if (normalized === 'partner workspace') return 'workspace_wide';
    return 'none';
  }

  function roleCodeToLabel(value) {
    const code = String(value || '').trim().toLowerCase();
    if (code === 'customer_user') return 'Customer User';
    if (code === 'customer_management') return 'Customer Management';
    if (code === 'vendor_user') return 'Partner User';
    if (code === 'vendor_management') return 'Partner Management';
    if (code === 'dingfelder_support') return 'Dingfelder Support';
    if (code === 'dingfelder_admin' || code === 'admin') return 'Dingfelder Admin';
    return value || 'Approved User';
  }

  function financialCodeToLabel(value) {
    const code = String(value || '').trim().toLowerCase();
    if (code === 'none') return 'None required';
    if (code === 'own_po_only') return 'Own P.O. only';
    if (code === 'workspace_wide') return 'Workspace-wide';
    if (code === 'internal') return 'Internal';
    return value || 'None required';
  }


  function deriveRoleCodeFromLabel(value) {
    const normalized = String(value || '').trim().toLowerCase();
    if (normalized === 'customer user') return 'customer_user';
    if (normalized === 'customer management') return 'customer_management';
    if (normalized === 'partner user') return 'vendor_user';
    if (normalized === 'partner management') return 'vendor_management';
    if (normalized === 'dingfelder support') return 'dingfelder_support';
    if (normalized === 'dingfelder admin' || normalized === 'admin') return 'dingfelder_admin';
    return '';
  }

  function getRoleCodeForSession(session) {
    if (!session) return '';
    return String(session.accessRoleCode || deriveRoleCodeFromLabel(session.accessProfile || '') || '').trim().toLowerCase();
  }

  function getAllowedPagesForRole(roleCode) {
    const normalized = String(roleCode || '').trim().toLowerCase();
    return ROLE_PAGE_ACCESS[normalized] ? ROLE_PAGE_ACCESS[normalized].slice() : ['overview', 'dashboard'];
  }

  function pageKeyFromHref(href) {
    const value = String(href || '').toLowerCase();
    if (!value || !value.includes('/portal/')) return '';
    if (value.includes('/approval-queue')) return 'approval-queue';
    if (value.includes('/request-access')) return 'request-access';
    if (value.includes('/request-received')) return 'request-received';
    if (value.includes('/login')) return 'login';
    if (value.includes('/forgot-password')) return 'forgot-password';
    if (value.includes('/documents')) return 'documents';
    if (value.includes('/uploads')) return 'uploads';
    if (value.includes('/work-requests')) return 'work-requests';
    if (value.includes('/quote-requests')) return 'quote-requests';
    if (value.includes('/projects')) return 'projects';
    if (value.includes('/support')) return 'support';
    if (value.includes('/my-training')) return 'my-training';
    if (value.includes('/feature-preview')) return 'preview';
    if (value.includes('/dashboard')) return 'dashboard';
    return 'overview';
  }

  function currentPageKey() {
    return pageKeyFromHref(path);
  }

  function getCurrentSession(key = workspaceKey) {
    const sessions = loadSessions();
    return key ? (sessions[key] || null) : null;
  }

  function getLiveAccessToken(key = workspaceKey) {
    const session = getCurrentSession(key);
    return session && session.mode === 'real-auth' ? (session.accessToken || '') : '';
  }

  function getAllowedPagesForSession(session) {
    if (!session) return [];
    if (Array.isArray(session.allowedPages) && session.allowedPages.length) return session.allowedPages.slice();
    return getAllowedPagesForRole(getRoleCodeForSession(session));
  }

  function applyRoleGating(session) {
    if (!workspace || !session) return;
    const allowedPages = new Set(getAllowedPagesForSession(session));
    document.querySelectorAll('[data-path], .footer-links a, .header-utility a, .rail nav a').forEach(link => {
      const href = link.getAttribute('href') || link.getAttribute('data-path') || '';
      const pageKey = pageKeyFromHref(href);
      if (!pageKey || ['login', 'request-access', 'request-received', 'forgot-password'].includes(pageKey)) return;
      const allowed = allowedPages.has(pageKey);
      link.hidden = !allowed;
      if (allowed) link.removeAttribute('data-role-hidden');
      else link.setAttribute('data-role-hidden', 'true');
    });

    const page = currentPageKey();
    if (session.mode === 'real-auth' && page && !allowedPages.has(page) && !['login', 'request-access', 'request-received', 'forgot-password'].includes(page)) {
      window.location.replace(workspace.dashboardPath + '?denied=' + encodeURIComponent(page));
    }
  }

  function ensureQueueStatus(root) {
    let el = root.querySelector('[data-queue-status]');
    if (el) return el;
    const listEl = root.querySelector('[data-queue-list]');
    el = document.createElement('div');
    el.setAttribute('data-queue-status', '');
    el.className = 'alert-box info';
    el.hidden = true;
    if (listEl && listEl.parentNode) listEl.parentNode.insertBefore(el, listEl);
    else root.appendChild(el);
    return el;
  }

  function setQueueStatus(root, kind, message) {
    const el = ensureQueueStatus(root);
    if (!message) {
      el.hidden = true;
      el.textContent = '';
      return;
    }
    el.hidden = false;
    el.className = `alert-box ${kind || 'info'}`;
    el.innerHTML = `<strong>Approval activity</strong><div>${escapeHtml(message)}</div>`;
  }

  function findPortalNote(form) {
    return form.querySelector('.portal-note') || form.querySelector('[data-portal-note]');
  }

  function setPortalNote(form, message, isError) {
    const note = findPortalNote(form);
    if (!note) return;
    note.textContent = message;
    note.style.color = isError ? '#8b2a28' : '';
  }

  function initRequestForms() {
    const form = document.querySelector('[data-access-request]');
    if (!form || !workspace) return;
    form.addEventListener('submit', async evt => {
      evt.preventDefault();
      const fd = new FormData(form);
      const submitButton = form.querySelector('button[type="submit"]');
      const originalLabel = submitButton ? submitButton.textContent : '';
      const items = loadRequests();
      const fallbackId = makeId(workspace.code);
      const accessProfileLabel = fd.get('accessProfile') || '';
      const financialVisibilityLabel = fd.get('financialVisibility') || '';
      const request = {
        id: fallbackId,
        workspaceKey,
        workspaceLabel: fd.get('workspace') || workspace.label,
        company: fd.get('company') || '',
        fullName: fd.get('fullName') || '',
        roleTitle: fd.get('roleTitle') || '',
        email: slugEmail(fd.get('email')),
        emailRaw: fd.get('email') || '',
        phone: fd.get('phone') || '',
        accessProfile: accessProfileLabel,
        financialVisibility: financialVisibilityLabel,
        reason: fd.get('reason') || '',
        status: 'pending',
        createdAt: new Date().toISOString(),
        approvedAt: '',
        deniedAt: '',
        tempPassword: makeTempPassword(workspace.code, fallbackId),
        notes: '',
        submittedBy: 'portal-form',
        backendStatus: 'local-preview'
      };

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
      }
      setPortalNote(form, 'Submitting request to the live backend...', false);

      try {
        const payload = {
          workspaceSlug: workspaceKey,
          fullName: request.fullName,
          companyName: request.company,
          email: request.emailRaw || request.email,
          phone: request.phone,
          requestedRole: mapRequestedRole(accessProfileLabel),
          requestedFinancialVisibility: mapFinancialVisibility(financialVisibilityLabel),
          requestedModules: ['documents', 'work-requests', 'quote-requests', 'support'],
          notes: request.reason || 'Submitted from portal request-access form'
        };

        const response = window.AIRONPortalAPI && typeof window.AIRONPortalAPI.submitApprovalRequest === 'function'
          ? await window.AIRONPortalAPI.submitApprovalRequest(payload)
          : await fetch('/.netlify/functions/portal-request-access', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            }).then(async r => {
              const data = await r.json().catch(() => ({}));
              if (!r.ok) {
                const err = new Error(data.error || `Request failed: ${r.status}`);
                err.detail = data.detail;
                throw err;
              }
              return data;
            });

        const row = response && response.request ? response.request : null;
        if (row) {
          request.id = row.request_code || row.id || fallbackId;
          request.createdAt = row.created_at || request.createdAt;
          request.status = row.status || request.status;
          request.backendStatus = 'captured';
          request.backendId = row.id || '';
          request.requestCode = row.request_code || request.id;
          request.tempPassword = makeTempPassword(workspace.code, request.id);
        }

        items.unshift(request);
        saveRequests(items);
        const q = new URLSearchParams({ requestId: request.id });
        window.location.href = `${workspace.queuePath.replace('approval-queue','request-received')}?${q.toString()}`;
      } catch (error) {
        console.error(error);
        setPortalNote(form, `Live backend request failed. ${error.message || 'Please try again.'}`, true);
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalLabel || 'Submit request';
        }
      }
    });
  }

  function findRequestById(id) {
    return loadRequests().find(item => item.id === id);
  }

  function initReceivedPage() {
    const root = document.querySelector('[data-request-received]');
    if (!root || !workspace) return;
    const requestId = params.get('requestId');
    const request = requestId ? findRequestById(requestId) : null;
    if (!request) return;
    root.querySelectorAll('[data-request-field]').forEach(el => {
      const key = el.getAttribute('data-request-field');
      const val = request[key];
      if (typeof val === 'string' && val.trim()) el.textContent = val;
    });
    const idEl = root.querySelector('[data-request-id]');
    if (idEl) idEl.textContent = request.id;
    const statusEl = root.querySelector('[data-request-status]');
    if (statusEl) statusEl.innerHTML = statusBadge(request.status);
    const createdEl = root.querySelector('[data-request-created]');
    if (createdEl) createdEl.textContent = formatDate(request.createdAt);
    const queueLink = root.querySelector('[data-queue-link]');
    if (queueLink) queueLink.href = `${workspace.queuePath}?highlight=${encodeURIComponent(request.id)}`;
    const tempWrap = root.querySelector('[data-temp-password-wrap]');
    if (tempWrap) {
      tempWrap.hidden = true;
    }
  }

  function initApprovalQueue() {
    const root = document.querySelector('[data-approval-queue]');
    if (!root || !workspace) return;

    const session = getCurrentSession(workspaceKey);
    const allowedPages = session ? getAllowedPagesForSession(session) : [];
    const canAccessQueue = !!(session && session.mode === 'real-auth' && allowedPages.includes('approval-queue'));

    if (!canAccessQueue) {
      const target = session && session.mode === 'real-auth'
        ? workspace.dashboardPath
        : `${workspace.loginPath}?returnTo=${encodeURIComponent(window.location.pathname)}`;
      window.location.replace(target);
      return;
    }

    const listEl = root.querySelector('[data-queue-list]');
    const stats = {
      total: root.querySelector('[data-stat="total"]'),
      pending: root.querySelector('[data-stat="pending"]'),
      approved: root.querySelector('[data-stat="approved"]'),
      denied: root.querySelector('[data-stat="denied"]')
    };

    let liveItems = [];

    async function loadLiveItems() {
      if (!window.AIRONPortalAPI || typeof window.AIRONPortalAPI.listApprovalRequests !== 'function') {
        throw new Error('Approval queue API is not available on this build.');
      }

      const liveToken = getLiveAccessToken(workspaceKey);
      if (!liveToken) {
        throw new Error('Live workspace session is required to load approval requests.');
      }

      const response = await window.AIRONPortalAPI.listApprovalRequests(
  workspaceKey,
  { accessToken: liveToken }
);

      const rows = Array.isArray(response && response.requests) ? response.requests : [];
      return rows.map(row => ({
        id: row.id,
        requestCode: row.request_code || row.id,
        workspaceKey,
        workspaceLabel: workspace.label,
        company: row.company_name || '',
        fullName: row.full_name || '',
        roleTitle: roleCodeToLabel(row.requested_role || ''),
        email: slugEmail(row.email || ''),
        emailRaw: row.email || '',
        phone: row.phone || '',
        accessProfile: roleCodeToLabel(row.requested_role || ''),
        financialVisibility: financialCodeToLabel(row.requested_financial_visibility || ''),
        reason: row.notes || '',
        status: row.status || 'pending',
        createdAt: row.created_at || '',
        approvedAt: row.status === 'approved' ? (row.reviewed_at || '') : '',
        deniedAt: row.status === 'denied' ? (row.reviewed_at || '') : '',
        notes: row.notes || '',
        reviewedAt: row.reviewed_at || '',
        reviewedBy: row.reviewed_by || ''
      }));
    }

    root.addEventListener('click', async evt => {
      const button = evt.target.closest('[data-queue-action]');
      if (!button) return;

      const id = button.getAttribute('data-id');
      const action = button.getAttribute('data-queue-action');
      const item = liveItems.find(entry => entry.id === id || entry.requestCode === id);
      if (!item) return;
      if (!['approve', 'pending', 'deny'].includes(action)) return;

      if (!window.AIRONPortalAPI || typeof window.AIRONPortalAPI.reviewApprovalRequest !== 'function') {
        setQueueStatus(root, 'bad', 'Approval review API is not available on this build.');
        return;
      }

      const liveToken = getLiveAccessToken(workspaceKey);
      if (!liveToken) {
        setQueueStatus(root, 'bad', 'Live workspace session is required to review access requests.');
        return;
      }

      button.disabled = true;
      setQueueStatus(
        root,
        'info',
        action === 'approve'
          ? 'Approving request in the live backend...'
          : action === 'deny'
            ? 'Marking request denied in the live backend...'
            : 'Returning request to pending in the live backend...'
      );

      try {
        const response = await window.AIRONPortalAPI.reviewApprovalRequest({
          workspaceSlug: workspaceKey,
          requestId: item.requestCode || item.id,
          action,
          reviewerName: session && session.displayName ? session.displayName : 'Portal approval queue'
        }, liveToken);

        setQueueStatus(
          root,
          action === 'approve' ? 'good' : action === 'deny' ? 'warn' : 'info',
          response && response.message ? response.message : 'Approval request updated.'
        );
        await render();
      } catch (error) {
        console.error(error);
        setQueueStatus(root, 'bad', error.message || 'Live approval sync failed.');
      } finally {
        button.disabled = false;
      }
    });

    async function render() {
      try {
        liveItems = await loadLiveItems();
      } catch (error) {
        console.error(error);
        liveItems = [];
        setQueueStatus(root, 'bad', error.message || 'Could not load live approval requests.');
      }

      stats.total && (stats.total.textContent = String(liveItems.length));
      stats.pending && (stats.pending.textContent = String(liveItems.filter(i => i.status === 'pending').length));
      stats.approved && (stats.approved.textContent = String(liveItems.filter(i => i.status === 'approved').length));
      stats.denied && (stats.denied.textContent = String(liveItems.filter(i => i.status === 'denied').length));

      if (!liveItems.length) {
        listEl.innerHTML = `<div class="empty-card"><strong>No live approval requests found.</strong><p>New access requests submitted for ${workspace.label} will appear here for support/admin review.</p></div>`;
        return;
      }

      const highlight = params.get('highlight');
      listEl.innerHTML = liveItems.map(item => {
        const isHighlight = highlight && (highlight === item.id || highlight === item.requestCode) ? ' highlight' : '';
        const decisionLabel = item.status === 'approved' ? 'Approved' : item.status === 'denied' ? 'Denied' : 'Pending';
        const decisionDetail = item.reviewedAt ? `${decisionLabel} · ${formatDate(item.reviewedAt)}` : decisionLabel;
        const timestamps = `<div><span>Submitted</span><strong>${formatDate(item.createdAt)}</strong></div><div><span>Decision</span><strong>${decisionDetail}</strong></div>`;
        const backendLine = item.status === 'approved'
          ? `<p class="helper">Approved for workspace access. Membership and sign-in should now follow the assigned role.</p>`
          : item.status === 'denied'
            ? `<p class="helper">Denied for workspace access. Access remains blocked until the request is updated or resubmitted.</p>`
            : `<p class="helper">Captured in the workspace access flow and awaiting support/admin review.</p>`;

        return `
          <article class="request-card${isHighlight}" id="${item.id}">
            <div class="request-head">
              <div>
                <div class="request-id-strip">
                  <span class="request-id-pill">${item.requestCode || item.id}</span>
                  <span class="status-pill">${item.status === 'approved' ? 'Approved' : item.status === 'denied' ? 'Denied' : 'Pending review'}</span>
                </div>
                <h3>${escapeHtml(item.fullName || 'Unnamed request')}</h3>
                <p class="helper">${escapeHtml(item.emailRaw || item.email || '')} · ${escapeHtml(item.roleTitle || item.accessProfile || 'Role not provided')}</p>
                ${backendLine}
              </div>
              <div>${statusBadge(item.status)}</div>
            </div>
            <div class="request-meta">
              <div><span>Company / facility</span><strong>${escapeHtml(item.company || '')}</strong></div>
              <div><span>Workspace</span><strong>${escapeHtml(item.workspaceLabel || workspace.label)}</strong></div>
              <div><span>Requested role</span><strong>${escapeHtml(item.accessProfile || '')}</strong></div>
              <div><span>Financial visibility</span><strong>${escapeHtml(item.financialVisibility || '')}</strong></div>
              <div><span>Phone</span><strong>${escapeHtml(item.phone || 'Not provided')}</strong></div>
              ${timestamps}
              <div style="grid-column:1/-1"><span>Request notes</span><p>${escapeHtml(item.reason || 'No additional notes provided.')}</p></div>
            </div>
            <div class="request-actions">
              <button type="button" class="button small approve" data-queue-action="approve" data-id="${item.id}">Approve</button>
              <button type="button" class="button small pending" data-queue-action="pending" data-id="${item.id}">Return to pending</button>
              <button type="button" class="button small deny" data-queue-action="deny" data-id="${item.id}">Deny</button>
            </div>
          </article>`;
      }).join('');

      const target = highlight ? document.getElementById(highlight) : null;
      if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'center' }), 120);
    }

    render();
  }

  function initLoginForms() {
    const form = document.querySelector('[data-login-form]');
    if (!form || !workspace) return;
    const statusEl = form.querySelector('[data-login-status]');
    const emailEl = form.querySelector('input[name="email"]');
    const passEl = form.querySelector('input[name="password"]');

    form.addEventListener('submit', async evt => {
      evt.preventDefault();
      const email = slugEmail(emailEl ? emailEl.value : '');
      const password = String(passEl ? passEl.value : '').trim();

      if (!email || !password) {
        setLoginStatus(statusEl, 'warn', 'Enter your email and password to continue.');
        return;
      }

      if (!window.AIRONPortalAPI || typeof window.AIRONPortalAPI.loginWorkspace !== 'function') {
        setLoginStatus(statusEl, 'bad', 'Live workspace sign-in is not available on this build.');
        return;
      }

      setLoginStatus(statusEl, 'info', 'Checking workspace access...');

      try {
        const response = await window.AIRONPortalAPI.loginWorkspace({
          workspaceSlug: workspaceKey,
          email,
          password
        });

        if (!response || !response.ok || !response.session) {
          throw new Error((response && response.error) || 'Workspace sign-in failed.');
        }

        const sessions = loadSessions();
        sessions[workspaceKey] = {
          mode: 'real-auth',
          email: response.user && response.user.email ? response.user.email : email,
          displayName: response.profile && response.profile.full_name ? response.profile.full_name : (response.user && response.user.email ? response.user.email : email),
          requestId: response.request && response.request.request_code ? response.request.request_code : '',
          accessProfile: roleCodeToLabel(response.membership && response.membership.role ? response.membership.role : ''),
          accessRoleCode: response.membership && response.membership.role ? response.membership.role : '',
          financialVisibility: financialCodeToLabel(response.membership && response.membership.financial_visibility ? response.membership.financial_visibility : ''),
          status: response.membership && response.membership.status ? response.membership.status : 'approved',
          loginAt: new Date().toISOString(),
          accessToken: response.session.access_token,
          refreshToken: response.session.refresh_token,
          userId: response.user && response.user.id ? response.user.id : '',
          workspaceSlug: workspaceKey,
          liveMembershipId: response.membership && response.membership.id ? response.membership.id : '',
          allowedPages: Array.isArray(response.allowed_pages) ? response.allowed_pages : [],
          enabledModules: Array.isArray(response.enabled_modules) ? response.enabled_modules : [],
          live: true
        };
        saveSessions(sessions);
        window.location.href = `${workspace.dashboardPath}?auth=live`;
      } catch (error) {
        console.error(error);
        setLoginStatus(statusEl, 'bad', error.message || 'Workspace sign-in failed.');
      }
    });
  }

  function setLoginStatus(el, kind, message) {
    if (!el) return;
    el.className = `alert-box ${kind}`;
    el.hidden = false;
    el.innerHTML = `<strong>Workspace sign-in result</strong><div>${escapeHtml(message)}</div>`;
  }


  function initSessionBands() {
    if (!workspace) return;
    const sessions = loadSessions();
    const session = sessions[workspaceKey];
    const target = document.querySelector('[data-session-band]');
    if (!target || !session) return;
    target.hidden = false;
    target.innerHTML = `<strong>Live workspace access granted</strong> ${escapeHtml(session.email)} · ${escapeHtml(session.accessProfile || 'Approved user')} · ${escapeHtml(session.financialVisibility || 'Workspace access')}<a href="#" class="logout-link" data-logout-workspace="${workspaceKey}">Log out</a>`;
  }

  function getRequestAccessLinks() {
    return Array.from(document.querySelectorAll('.header-utility a[href*="request-access"], .footer-links a[href*="request-access"]'));
  }

  function getPrimaryHeaderButton() {
    return document.querySelector('.header-utility .utility-button--solid');
  }

  function syncApprovalQueueLinks(session) {
    document.querySelectorAll('[data-dynamic-approval-queue]').forEach(link => link.remove());
    if (!workspace || !session || session.mode !== 'real-auth') return;

    const allowedPages = getAllowedPagesForSession(session);
    if (!allowedPages.includes('approval-queue')) return;

    const queuePath = workspace.queuePath;
    const currentPage = currentPageKey();

    const headerUtility = document.querySelector('.header-utility');
    if (headerUtility) {
      const headerLink = document.createElement('a');
      headerLink.href = queuePath;
      headerLink.textContent = 'Approval Queue';
      headerLink.className = 'utility-link';
      headerLink.setAttribute('data-path', queuePath);
      headerLink.setAttribute('data-dynamic-approval-queue', 'header');

      const loginButton = getPrimaryHeaderButton();
      if (loginButton && loginButton.parentNode === headerUtility) {
        headerUtility.insertBefore(headerLink, loginButton);
      } else {
        headerUtility.appendChild(headerLink);
      }
    }

    const railNav = document.querySelector('.rail nav');
    if (railNav) {
      const railLink = document.createElement('a');
      railLink.href = queuePath;
      railLink.textContent = 'Approval Queue';
      railLink.setAttribute('data-path', queuePath);
      railLink.setAttribute('data-dynamic-approval-queue', 'rail');
      if (currentPage === 'approval-queue') railLink.classList.add('active');
      railNav.appendChild(railLink);
    }
  }


function resetWorkspaceHeaderToLoggedOut() {
  if (!workspace) return;
  const loginButton = getPrimaryHeaderButton();
  if (loginButton) {
    loginButton.textContent = 'Login';
    loginButton.href = workspace.loginPath;
    loginButton.title = `Open ${workspace.label} login`;
    loginButton.setAttribute('aria-label', `Open ${workspace.label} login`);
  }
  getRequestAccessLinks().forEach(link => {
    link.textContent = 'Request Access';
    link.href = workspace.requestPath;
    link.setAttribute('data-path', workspace.requestPath);
    link.removeAttribute('data-logout-workspace');
    link.hidden = false;
  });
  document.querySelectorAll('[data-dynamic-approval-queue]').forEach(link => link.remove());
  const target = document.querySelector('[data-session-band]');
  if (target) {
    target.hidden = true;
    target.innerHTML = '';
  }
}

function isProtectedWorkspacePage(page = currentPageKey()) {
  const key = String(page || '').trim().toLowerCase();
  return ['dashboard', 'documents', 'uploads', 'work-requests', 'quote-requests', 'projects', 'support', 'my-training', 'approval-queue'].includes(key);
}

  function applyAuthenticatedHeaderState(session) {
    if (!workspace || !session) return;
    const loginButton = getPrimaryHeaderButton();
    if (loginButton) {
      const request = session.requestId ? findRequestById(session.requestId) : null;
      const preferred = String(session.displayName || (request && request.fullName) || session.email || '').trim();
      const shortName = preferred.length > 18 ? preferred.split(/\s+/)[0] : preferred;
      loginButton.textContent = shortName || 'Workspace';
      loginButton.href = workspace.dashboardPath;
      loginButton.title = preferred || session.email || 'Approved workspace user';
      loginButton.setAttribute('aria-label', `Signed in as ${preferred || session.email || 'approved workspace user'}`);
    }
    getRequestAccessLinks().forEach(link => {
      link.textContent = session.mode === 'real-auth' ? 'Logout' : 'Logout';
      link.href = '#';
      link.setAttribute('data-logout-workspace', workspaceKey);
      link.removeAttribute('data-path');
    });
    syncApprovalQueueLinks(session);
  }

  function redirectAuthenticatedWorkspaceViews(session) {
    if (!workspace || !session || session.mode !== 'real-auth') return;
    const lowerPath = String(path || '').toLowerCase();
    if (lowerPath.includes('/request-access') || lowerPath.includes('/login.html')) {
      window.location.replace(workspace.dashboardPath);
    }
  }

  function initHeaderSessionState() {
    if (!workspace) return;
    const sessions = loadSessions();
    const session = sessions[workspaceKey];
    if (!session) return;
    applyAuthenticatedHeaderState(session);
    applyRoleGating(session);
    redirectAuthenticatedWorkspaceViews(session);
  }

  async function initLiveSessionResolution() {
    if (!workspace || !window.AIRONPortalAPI || typeof window.AIRONPortalAPI.getSessionMe !== 'function') return;
    const sessions = loadSessions();
    const session = sessions[workspaceKey];
    if (!session || session.mode !== 'real-auth' || !session.accessToken) return;
    try {
      const resolved = await window.AIRONPortalAPI.getSessionMe(workspaceKey, session.accessToken);
      if (!resolved || !resolved.authenticated || !resolved.membership || resolved.membership.status !== 'approved') {
        throw new Error('Live workspace session is no longer approved.');
      }
      sessions[workspaceKey] = {
        ...session,
        mode: 'real-auth',
        live: true,
        email: resolved.user && resolved.user.email ? resolved.user.email : (session.email || ''),
        displayName: resolved.profile && resolved.profile.full_name ? resolved.profile.full_name : (session.displayName || session.email || ''),
        accessProfile: roleCodeToLabel(resolved.membership.role || session.accessRoleCode || ''),
        accessRoleCode: resolved.membership.role || session.accessRoleCode || '',
        financialVisibility: financialCodeToLabel(resolved.membership.financial_visibility || ''),
        status: resolved.membership.status || 'approved',
        liveMembershipId: resolved.membership.id || session.liveMembershipId || '',
        userId: resolved.user && resolved.user.id ? resolved.user.id : (session.userId || ''),
        allowedPages: Array.isArray(resolved.allowed_pages) ? resolved.allowed_pages : getAllowedPagesForRole(resolved.membership.role || session.accessRoleCode || ''),
        enabledModules: Array.isArray(resolved.enabled_modules) ? resolved.enabled_modules : (session.enabledModules || []),
        validatedAt: new Date().toISOString()
      };
      saveSessions(sessions);
      applyAuthenticatedHeaderState(sessions[workspaceKey]);
      applyRoleGating(sessions[workspaceKey]);
      const target = document.querySelector('[data-session-band]');
      if (target) {
        target.hidden = false;
        target.innerHTML = `<strong>Live workspace access granted</strong> ${escapeHtml(sessions[workspaceKey].email)} · ${escapeHtml(sessions[workspaceKey].accessProfile || 'Approved user')} · ${escapeHtml(sessions[workspaceKey].financialVisibility || 'Workspace access')}<a href="#" class="logout-link" data-logout-workspace="${workspaceKey}">Log out</a>`;
      }
    } catch (error) {
      console.error(error);
      delete sessions[workspaceKey];
      saveSessions(sessions);
      resetWorkspaceHeaderToLoggedOut();
      if (isProtectedWorkspacePage()) {
        window.location.href = `${workspace.loginPath}?returnTo=${encodeURIComponent(window.location.pathname)}`;
      }
    }
  }


if (workspace && !window.__dingfelderPortalLiveSessionBindings) {
  window.__dingfelderPortalLiveSessionBindings = true;
  let liveSessionRefreshTimer = null;
  const scheduleLiveSessionResolution = () => {
    if (!workspace) return;
    if (liveSessionRefreshTimer) window.clearTimeout(liveSessionRefreshTimer);
    liveSessionRefreshTimer = window.setTimeout(() => {
      initLiveSessionResolution();
    }, 180);
  };
  window.addEventListener('focus', scheduleLiveSessionResolution);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') scheduleLiveSessionResolution();
  });
}

  function initMobileNav() {
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.mobile-nav-toggle');
    if (!header || !toggle) return;
    const closeTargets = Array.from(document.querySelectorAll('[data-mobile-nav-close]'));
    const navLinks = Array.from(document.querySelectorAll('.nav-portal a, .header-utility a'));

    function setOpen(open) {
      header.classList.toggle('menu-open', !!open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close workspace menu' : 'Open workspace menu');
    }

    toggle.addEventListener('click', () => {
      setOpen(!header.classList.contains('menu-open'));
    });

    closeTargets.forEach(el => el.addEventListener('click', () => setOpen(false)));
    navLinks.forEach(link => link.addEventListener('click', () => {
      if (window.innerWidth <= 900) setOpen(false);
    }));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) setOpen(false);
    });
  }

  function initLogoutLinks() {
    document.addEventListener('click', async evt => {
      const link = evt.target.closest('[data-logout-workspace]');
      if (!link) return;
      evt.preventDefault();
      const key = link.getAttribute('data-logout-workspace');
      const sessions = loadSessions();
      const session = sessions[key] || null;
      delete sessions[key];
      saveSessions(sessions);
      const targetWorkspace = WORKSPACES[key] || workspace;
      if (session && session.mode === 'real-auth' && window.AIRONPortalAPI && typeof window.AIRONPortalAPI.logoutWorkspace === 'function') {
        try {
          await window.AIRONPortalAPI.logoutWorkspace(session.accessToken || '');
        } catch (error) {
          console.error(error);
        }
      }
      if (targetWorkspace && targetWorkspace.loginPath) {
        window.location.href = targetWorkspace.loginPath;
      } else {
        window.location.reload();
      }
    });
  }


  const WORK_SUBMISSION_KEY = 'dingfelder_portal_work_submissions';
  const QUOTE_SUBMISSION_KEY = 'dingfelder_portal_quote_submissions';

  function loadSubmissionItems(kind) {
    const key = kind === 'quote' ? QUOTE_SUBMISSION_KEY : WORK_SUBMISSION_KEY;
    try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) { return []; }
  }
  function saveSubmissionItems(kind, items) {
    const key = kind === 'quote' ? QUOTE_SUBMISSION_KEY : WORK_SUBMISSION_KEY;
    localStorage.setItem(key, JSON.stringify(items));
  }
  function makeSubmissionId(kind) {
    const prefix = kind === 'quote' ? 'QTE' : 'WRK';
    return makeId(`${workspace ? workspace.code : 'GEN'}-${prefix}`);
  }

  const DIRECT_UPLOAD_TOTAL_LIMIT = 4.5 * 1024 * 1024;
  const DIRECT_UPLOAD_FILE_LIMIT = 3 * 1024 * 1024;

  function readFileAsBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = String(reader.result || '');
        const comma = result.indexOf(',');
        resolve(comma >= 0 ? result.slice(comma + 1) : result);
      };
      reader.onerror = () => reject(new Error(`Failed to read ${file && file.name ? file.name : 'selected file'}.`));
      reader.readAsDataURL(file);
    });
  }

  function initOperationalForms() {
    document.querySelectorAll('[data-submission-form]').forEach(form => {
      form.addEventListener('submit', async evt => {
        evt.preventDefault();
        const kind = form.getAttribute('data-submission-form') === 'quote' ? 'quote' : 'work';
        const fd = new FormData(form);
        const items = loadSubmissionItems(kind);
        const id = makeSubmissionId(kind);
        const feedback = form.parentElement.querySelector('[data-submit-feedback]');
        const submitButton = form.querySelector('button[type="submit"]');
        const originalLabel = submitButton ? submitButton.textContent : '';
        const entry = {
          id,
          kind,
          workspaceKey,
          workspaceLabel: workspace ? workspace.label : '',
          title: String(fd.get('title') || '').trim(),
          priority: String(fd.get('priority') || '').trim(),
          poNumber: String(fd.get('poNumber') || '').trim(),
          details: String(fd.get('details') || '').trim(),
          createdAt: new Date().toISOString(),
          status: 'staged locally',
          backendStatus: 'local-preview'
        };

        if (feedback) {
          feedback.hidden = true;
          feedback.innerHTML = '';
        }

        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = kind === 'quote' ? 'Submitting quote request...' : 'Submitting work request...';
        }

        try {
          if (workspace && (kind === 'work' || kind === 'quote')) {
            const sessions = loadSessions();
            const session = sessions[workspaceKey] || {};
            const payload = kind === 'quote'
              ? {
                  workspaceSlug: workspaceKey,
                  title: entry.title,
                  scopeSummary: entry.details,
                  poNumber: entry.poNumber || null,
                  submitterName: session.displayName || null,
                  submitterEmail: session.email || null
                }
              : {
                  workspaceSlug: workspaceKey,
                  title: entry.title,
                  description: entry.details,
                  poNumber: entry.poNumber || null,
                  priority: entry.priority || null,
                  submitterName: session.displayName || null,
                  submitterEmail: session.email || null
                };

            const liveToken = session.mode === 'real-auth' ? (session.accessToken || '') : '';
            const response = kind === 'quote'
              ? (window.AIRONPortalAPI && typeof window.AIRONPortalAPI.submitQuoteRequest === 'function'
                  ? await window.AIRONPortalAPI.submitQuoteRequest(payload, liveToken)
                  : await fetch('/.netlify/functions/portal-quote-request', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        ...(liveToken ? { Authorization: `Bearer ${liveToken}` } : {})
                      },
                      body: JSON.stringify(payload)
                    }).then(async r => {
                      const data = await r.json().catch(() => ({}));
                      if (!r.ok) {
                        const err = new Error(data.error || `Request failed: ${r.status}`);
                        err.detail = data.detail;
                        throw err;
                      }
                      return data;
                    }))
              : (window.AIRONPortalAPI && typeof window.AIRONPortalAPI.submitWorkRequest === 'function'
                  ? await window.AIRONPortalAPI.submitWorkRequest(payload, liveToken)
                  : await fetch('/.netlify/functions/portal-work-request', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        ...(liveToken ? { Authorization: `Bearer ${liveToken}` } : {})
                      },
                      body: JSON.stringify(payload)
                    }).then(async r => {
                      const data = await r.json().catch(() => ({}));
                      if (!r.ok) {
                        const err = new Error(data.error || `Request failed: ${r.status}`);
                        err.detail = data.detail;
                        throw err;
                      }
                      return data;
                    }));

            const row = response && (kind === 'quote' ? response.quoteRequest : response.workRequest)
              ? (kind === 'quote' ? response.quoteRequest : response.workRequest)
              : null;
            if (row) {
              entry.backendId = row.id || '';
              entry.createdAt = row.created_at || entry.createdAt;
              entry.status = row.status || 'open';
              entry.backendStatus = 'captured';
            } else {
              entry.status = 'open';
              entry.backendStatus = 'captured';
            }

            items.unshift(entry);
            saveSubmissionItems(kind, items);

            if (feedback) {
              feedback.hidden = false;
              feedback.innerHTML = `
                <strong>${kind === 'quote' ? 'Quote request submitted to live backend' : 'Work request submitted to live backend'}</strong>
                <div>This request is now stored in the workspace request flow.</div>
                <div class="request-id-strip">
                  <span class="request-id-pill">${escapeHtml(id)}</span>
                  <span class="status-pill">${escapeHtml(entry.status || 'open')}</span>
                  ${entry.poNumber ? `<span class="temp-pass-pill">P.O.: ${escapeHtml(entry.poNumber)}</span>` : ''}
                </div>
              `;
            }

            form.reset();
            return;
          }

          items.unshift(entry);
          saveSubmissionItems(kind, items);
          if (feedback) {
            feedback.hidden = false;
            feedback.innerHTML = `
              <strong>${kind === 'quote' ? 'Quote request captured' : 'Work request captured'}</strong>
              <div>This request has been captured on this device. Confirm with support if it does not appear in the workspace.</div>
              <div class="request-id-strip">
                <span class="request-id-pill">${escapeHtml(id)}</span>
                <span class="status-pill">${kind === 'quote' ? 'Quote request' : 'Work request'}</span>
                ${entry.poNumber ? `<span class="temp-pass-pill">P.O.: ${escapeHtml(entry.poNumber)}</span>` : ''}
              </div>
            `;
          }
          form.reset();
        } catch (error) {
          console.error(error);
          if (feedback) {
            feedback.hidden = false;
            feedback.innerHTML = `
              <strong>${kind === 'quote' ? 'Quote request failed' : 'Work request failed'}</strong>
              <div>${escapeHtml(error.message || 'Please try again.')}</div>
            `;
          }
        } finally {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalLabel || (kind === 'quote' ? 'Submit quote request' : 'Submit work request');
          }
        }
      });
    });
  }



  const UPLOAD_SHELL_KEY = 'dingfelder_portal_upload_shell';

  function loadUploadShellItems() {
    try { return JSON.parse(localStorage.getItem(UPLOAD_SHELL_KEY) || '[]'); } catch (e) { return []; }
  }
  function saveUploadShellItems(items) {
    localStorage.setItem(UPLOAD_SHELL_KEY, JSON.stringify(items));
  }
  function guessTypeFromName(name) {
    const lower = String(name || '').toLowerCase();
    if (lower.endsWith('.pdf')) return 'application/pdf';
    if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
    if (lower.endsWith('.png')) return 'image/png';
    if (lower.endsWith('.csv')) return 'text/csv';
    if (lower.endsWith('.xlsx')) return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    if (lower.endsWith('.xls')) return 'application/vnd.ms-excel';
    if (lower.endsWith('.docx')) return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    if (lower.endsWith('.doc')) return 'application/msword';
    return 'application/octet-stream';
  }
  function formatFileBytes(bytes) {
    const value = Number(bytes || 0);
    if (!value) return 'size not captured';
    if (value < 1024) return `${value} B`;
    if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)} KB`;
    if (value < 1024 * 1024 * 1024) return `${(value / (1024 * 1024)).toFixed(1)} MB`;
    return `${(value / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  }
  function setSelectedFiles(fileInput, target) {
    if (!fileInput || !target) return;
    const files = Array.from(fileInput.files || []);
    if (!files.length) {
      target.textContent = 'No files selected yet.';
      return;
    }
    const names = files.slice(0, 3).map(file => `${file.name} (${formatFileBytes(file.size)})`);
    const remainder = files.length > 3 ? ` + ${files.length - 3} more` : '';
    target.textContent = `${files.length} file${files.length === 1 ? '' : 's'} selected: ${names.join(', ')}${remainder}`;
  }
  function renderLiveDocumentList(target, rows) {
    if (!target) return;
    const items = Array.isArray(rows) ? rows : [];
    if (!items.length) {
      target.innerHTML = `<p class="helper">No live upload intake captured yet for this workspace.</p>`;
      return;
    }
    target.innerHTML = `
      <table class="table">
        <thead>
          <tr><th>Title</th><th>Category</th><th>File</th><th>P.O./Ref</th><th>Captured</th></tr>
        </thead>
        <tbody>
          ${items.map(item => `
            <tr>
              <td>${escapeHtml(item.title || '')}</td>
              <td>${escapeHtml(item.category || '')}</td>
              <td>${escapeHtml(item.file_name || '')}</td>
              <td>${escapeHtml(item.po_number || '—')}</td>
              <td>${escapeHtml(formatDate(item.created_at || item.createdAt || ''))}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>`;
  }
  async function refreshLiveDocuments(workspaceSlug, target) {
    if (!workspaceSlug || !target) return;
    const liveToken = getLiveAccessToken(workspaceSlug);
    if (!liveToken) {
      target.innerHTML = `<p class="helper">Sign in with approved workspace access to load recent live intake.</p>`;
      return;
    }
    target.innerHTML = `<p class="helper">Loading recent live intake...</p>`;
    try {
      const response = window.AIRONPortalAPI && typeof window.AIRONPortalAPI.listDocuments === 'function'
        ? await window.AIRONPortalAPI.listDocuments(workspaceSlug, { category: '', limit: 8, accessToken: liveToken })
        : await fetch(`/.netlify/functions/portal-documents-list?workspace=${encodeURIComponent(workspaceSlug)}&limit=8`, {
            headers: liveToken ? { Authorization: `Bearer ${liveToken}` } : {}
          }).then(async r => {
            const data = await r.json().catch(() => ({}));
            if (!r.ok) {
              const err = new Error(data.error || `Request failed: ${r.status}`);
              err.detail = data.detail;
              throw err;
            }
            return data;
          });
      renderLiveDocumentList(target, response && response.documents ? response.documents : []);
    } catch (error) {
      console.error(error);
      target.innerHTML = `<p class="helper">Recent live intake is not available right now.</p>`;
    }
  }
  function initUploadShellForms() {
    const livePanels = Array.from(document.querySelectorAll('[data-live-document-list]'));
    livePanels.forEach(target => {
      const slug = target.getAttribute('data-live-document-list') || workspaceKey || '';
      if (slug) refreshLiveDocuments(slug, target);
    });

    document.querySelectorAll('[data-upload-shell-form]').forEach(form => {
      const workspaceSlug = form.getAttribute('data-workspace-slug') || workspaceKey || '';
      const liveTarget = form.closest('.main-shell') && form.closest('.main-shell').querySelector('[data-live-document-list]');
      const feedback = form.parentElement.querySelector('[data-upload-feedback]') || form.querySelector('[data-upload-feedback]');
      const submitButton = form.querySelector('button[type="submit"]');
      const fileInput = form.querySelector('input[name="files"]');
      const selectedFiles = form.querySelector('[data-selected-files]');
      const initialSession = getCurrentSession(workspaceSlug) || getCurrentSession(workspaceKey) || {};
      const contactName = form.querySelector('input[name="contactName"]');
      const contactEmail = form.querySelector('input[name="contactEmail"]');
      if (contactName && initialSession.displayName && !contactName.value) contactName.value = initialSession.displayName;
      if (contactEmail && initialSession.email && !contactEmail.value) contactEmail.value = initialSession.email;
      if (fileInput && selectedFiles) {
        setSelectedFiles(fileInput, selectedFiles);
        fileInput.addEventListener('change', () => setSelectedFiles(fileInput, selectedFiles));
      }

      form.addEventListener('submit', async evt => {
        evt.preventDefault();
        const fd = new FormData(form);
        const rawFiles = Array.from((fileInput && fileInput.files) || []);
        if (!rawFiles.length) {
          if (feedback) {
            feedback.hidden = false;
            feedback.innerHTML = `<strong>Files are required for upload intake</strong><div>Select one or more files so they can be uploaded into the workspace file library.</div>`;
          }
          return;
        }
        const totalBytes = rawFiles.reduce((sum, file) => sum + Number(file.size || 0), 0);
        const tooLarge = rawFiles.find(file => Number(file.size || 0) > DIRECT_UPLOAD_FILE_LIMIT);
        if (tooLarge) {
          if (feedback) {
            feedback.hidden = false;
            feedback.innerHTML = `<strong>Selected file is too large for this direct upload path</strong><div>${escapeHtml(tooLarge.name)} is ${(Number(tooLarge.size || 0) / (1024 * 1024)).toFixed(2)} MB. Keep single files under ${(DIRECT_UPLOAD_FILE_LIMIT / (1024 * 1024)).toFixed(1)} MB for now.</div>`;
          }
          return;
        }
        if (totalBytes > DIRECT_UPLOAD_TOTAL_LIMIT) {
          if (feedback) {
            feedback.hidden = false;
            feedback.innerHTML = `<strong>Selected package is too large for this direct upload path</strong><div>This first binary upload pass supports about ${(DIRECT_UPLOAD_TOTAL_LIMIT / (1024 * 1024)).toFixed(1)} MB total per submission. Split larger packages into smaller batches for now.</div>`;
          }
          return;
        }
        const originalLabel = submitButton ? submitButton.textContent : '';
        if (feedback) { feedback.hidden = true; feedback.innerHTML = ''; }
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = 'Uploading files...';
        }
        try {
          const session = getCurrentSession(workspaceSlug) || getCurrentSession(workspaceKey) || {};
          const liveToken = session.mode === 'real-auth' ? (session.accessToken || '') : '';
          if (!liveToken) {
            throw new Error('Sign in with approved workspace access before uploading live files.');
          }
          const payload = {
            workspaceSlug,
            packageTitle: String(fd.get('packageTitle') || '').trim(),
            category: String(fd.get('category') || '').trim() || 'Customer document package',
            poNumber: String(fd.get('poNumber') || '').trim() || null,
            notes: String(fd.get('notes') || '').trim(),
            visibility: 'workspace',
            submitterName: String(fd.get('contactName') || session.displayName || '').trim() || null,
            submitterEmail: String(fd.get('contactEmail') || session.email || '').trim() || null,
            files: await Promise.all(rawFiles.map(async file => ({
              fileName: file.name,
              fileType: file.type || guessTypeFromName(file.name),
              fileSize: Number(file.size || 0),
              dataBase64: await readFileAsBase64(file)
            })))
          };

          const response = window.AIRONPortalAPI && typeof window.AIRONPortalAPI.submitBinaryUpload === 'function'
            ? await window.AIRONPortalAPI.submitBinaryUpload(payload, liveToken)
            : await fetch('/.netlify/functions/portal-upload-binary', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  ...(liveToken ? { Authorization: `Bearer ${liveToken}` } : {})
                },
                body: JSON.stringify(payload)
              }).then(async r => {
                const data = await r.json().catch(() => ({}));
                if (!r.ok) {
                  const err = new Error(data.error || `Request failed: ${r.status}`);
                  err.detail = data.detail;
                  throw err;
                }
                return data;
              });

          const docs = response && response.documents ? response.documents : [];
          const items = loadUploadShellItems();
          docs.forEach(doc => items.unshift({
            id: doc.id,
            workspaceKey: workspaceSlug,
            title: doc.title,
            category: doc.category,
            poNumber: doc.po_number,
            fileName: doc.file_name,
            fileType: doc.file_type,
            createdAt: doc.created_at,
            storageBucket: doc.storage_bucket
          }));
          saveUploadShellItems(items.slice(0, 40));

          if (feedback) {
            feedback.hidden = false;
            feedback.innerHTML = `
              <strong>Files uploaded to live backend</strong>
              <div>${docs.length} file${docs.length === 1 ? '' : 's'} captured in the workspace file library and recorded in the document log.</div>
              <div class="request-id-strip">
                <span class="request-id-pill">${escapeHtml(workspaceSlug.toUpperCase())}-UPL-${new Date().getFullYear()}</span>
                <span class="status-pill">${escapeHtml(docs.length)} file${docs.length === 1 ? '' : 's'}</span>
                <span class="badge good">customer library</span>
                ${payload.poNumber ? `<span class="temp-pass-pill">P.O.: ${escapeHtml(payload.poNumber)}</span>` : ''}
              </div>
            `;
          }

          form.reset();
          if (selectedFiles) setSelectedFiles(fileInput, selectedFiles);
          await refreshLiveDocuments(workspaceSlug, liveTarget);
        } catch (error) {
          console.error(error);
          if (feedback) {
            feedback.hidden = false;
            feedback.innerHTML = `<strong>Live upload failed</strong><div>${escapeHtml(error.message || 'Please try again.')}</div>`;
          }
        } finally {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalLabel || 'Upload files now';
          }
        }
      });
    });
  }


function trainingRequestTypeLabel(value) {
  const key = String(value || '').trim().toLowerCase();
  if (key === 'custom_training') return 'Custom training request';
  if (key === 'sop_training') return 'SOP training request';
  if (key === 'refresher_retraining') return 'Refresher / retraining request';
  if (key === 'new_employee_onboarding') return 'New employee onboarding request';
  if (key === 'certification_qualification') return 'Certification / qualification request';
  if (key === 'general_training_support') return 'General training support request';
  return value || 'Training request';
}

function trainingSopAvailabilityLabel(value) {
  const key = String(value || '').trim().toLowerCase();
  if (key === 'attached') return 'SOP attached';
  if (key === 'on_file') return 'SOP already on file';
  if (key === 'needs_creation') return 'SOP needs to be created first';
  return '';
}


function trainingQueueStatusLabel(value) {
  const key = String(value || '').trim().toLowerCase();
  if (key === 'open') return 'Open';
  if (key === 'in_review') return 'In review';
  if (key === 'sop_creation_needed') return 'SOP creation needed';
  if (key === 'scheduled') return 'Scheduled';
  if (key === 'completed') return 'Completed';
  if (key === 'closed') return 'Closed';
  return value || 'Open';
}

function trainingQueueStatusClass(value) {
  const key = String(value || '').trim().toLowerCase();
  if (key === 'completed') return 'good';
  if (key === 'closed') return 'warn';
  if (key === 'scheduled') return 'system';
  return 'dim';
}

function canManageTrainingQueue(role) {
  return ['customer_management', 'vendor_management', 'dingfelder_support', 'dingfelder_admin'].includes(String(role || '').trim().toLowerCase());
}



const TRAINING_ASSIGNMENT_CATALOG = [
  { moduleKey: 'sat_orientation', moduleTitle: 'S.A.T. Visitor Orientation', modulePath: '/sat', categoryLabel: 'Campus' },
  { moduleKey: 'evacuation_muster', moduleTitle: 'Emergency Evacuation & Muster', modulePath: '/evacuation', categoryLabel: 'Campus' },
  { moduleKey: 'h2s_awareness', moduleTitle: 'H₂S Awareness & SCBA', modulePath: '/h2s', categoryLabel: 'Process / Gas' },
  { moduleKey: 'arc_flash', moduleTitle: 'Arc Flash & Electrical Safety', modulePath: '/arcflash', categoryLabel: 'Electrical Safety' },
  { moduleKey: 'loto_campus', moduleTitle: 'LOTO — Full Campus', modulePath: '/loto-campus', categoryLabel: 'LOTO' },
  { moduleKey: 'loto_foundry', moduleTitle: 'LOTO — Foundry Focus', modulePath: '/loto', categoryLabel: 'LOTO' },
  { moduleKey: 'hazcom', moduleTitle: 'Hazard Communication / SDS / GHS', modulePath: '/hazcom', categoryLabel: 'Chemical Safety' },
  { moduleKey: 'ppe_fundamentals', moduleTitle: 'PPE Fundamentals', modulePath: '/ppe', categoryLabel: 'PPE' },
  { moduleKey: 'forklift_safety', moduleTitle: 'Forklift / Powered Industrial Truck Safety', modulePath: '/forklift', categoryLabel: 'Material Handling' },
  { moduleKey: 'fire_extinguishers', moduleTitle: 'Fire Extinguisher Basics', modulePath: '/fire-extinguishers', categoryLabel: 'Fire Safety' },
  { moduleKey: 'molten_metal', moduleTitle: 'Molten Metal Awareness', modulePath: '/molten-metal', categoryLabel: 'Foundry Safety' },
  { moduleKey: 'furnace_melt_deck', moduleTitle: 'Furnace & Melt Deck Safety', modulePath: '/furnace-melt-deck', categoryLabel: 'Foundry Safety' }
];

function getTrainingCatalogModule(moduleKey) {
  const target = String(moduleKey || '').trim().toLowerCase();
  return TRAINING_ASSIGNMENT_CATALOG.find(item => String(item.moduleKey || '').trim().toLowerCase() === target) || null;
}

function trainingAssignmentStatusLabel(value) {
  const key = String(value || '').trim().toLowerCase();
  if (key === 'assigned') return 'Assigned';
  if (key === 'in_progress') return 'In progress';
  if (key === 'completed') return 'Completed';
  if (key === 'waived') return 'Waived';
  if (key === 'cancelled') return 'Cancelled';
  return value || 'Assigned';
}

function trainingAssignmentStatusClass(value) {
  const key = String(value || '').trim().toLowerCase();
  if (key === 'completed') return 'good';
  if (key === 'in_progress') return 'system';
  if (key === 'waived' || key === 'cancelled') return 'warn';
  return 'dim';
}

function canAssignTraining(role) {
  return ['customer_management', 'vendor_management', 'dingfelder_support', 'dingfelder_admin'].includes(String(role || '').trim().toLowerCase());
}


function trainingHistoryStatusLabel(value) {
  const key = String(value || '').trim().toLowerCase();
  if (key === 'completed') return 'Completed';
  if (key === 'emailed') return 'Certificate emailed';
  return value || 'Completed';
}

function renderTrainingHistory(target, items, options = {}) {
  if (!target) return;
  const rows = Array.isArray(items) ? items : [];
  if (!rows.length) {
    target.innerHTML = `<div class="helper">No completed training history is available yet for this account.</div>`;
    return;
  }

  target.innerHTML = `<div class="history-grid">
    ${rows.map(item => {
      const completedLabel = item.completed_at ? formatDate(item.completed_at) : 'Completed';
      const scoreText =
        item.quiz_correct != null && item.quiz_total != null
          ? `${item.quiz_correct}/${item.quiz_total}`
          : (item.score != null ? String(item.score) : 'Complete');
      const sentLabel = item.last_certificate_emailed_at ? formatDate(item.last_certificate_emailed_at) : '';
      const workspaceLabel = item.workspace_label || 'Workspace';
      return `<article class="history-card">
        <div class="history-head">
          <div>
            <h4>${escapeHtml(item.module_title || 'Training module')}</h4>
            <p class="helper">${escapeHtml(workspaceLabel)} · ${escapeHtml(item.module_path || '')}</p>
          </div>
          <span class="badge good">${escapeHtml(trainingHistoryStatusLabel('completed'))}</span>
        </div>
        <div class="history-meta">
          <div><span>Completed</span><strong>${escapeHtml(completedLabel)}</strong></div>
          <div><span>Score</span><strong>${escapeHtml(scoreText)}</strong></div>
          <div><span>Certificate</span><strong>${item.last_certificate_emailed_at ? 'Emailed' : 'Available'}</strong></div>
          <div><span>Runtime</span><strong>${item.runtime_minutes != null ? `${item.runtime_minutes} min` : '—'}</strong></div>
        </div>
        ${sentLabel ? `<p class="helper"><strong>Last certificate email:</strong> ${escapeHtml(sentLabel)}</p>` : ''}
        <div class="history-actions">
          <button type="button" class="button secondary small" data-training-certificate data-id="${escapeHtml(item.id)}">Email certificate</button>
        </div>
      </article>`;
    }).join('')}
  </div>`;
}

function renderTrainingAssignments(target, items, options = {}) {
  if (!target) return;
  const rows = Array.isArray(items) ? items : [];
  const canManage = !!options.canManage;
  if (!rows.length) {
    target.innerHTML = `<div class="helper">No assigned learning is active for this view yet.</div>`;
    return;
  }

  target.innerHTML = `<div class="assignment-grid">
    ${rows.map(item => {
      const providerUrl = item.provider_url || (item.module_path ? `https://training.dingfelder.co${item.module_path}` : '');
      const effectiveStatus = item.effective_status || item.status || 'assigned';
      const effectiveCompletedAt = item.effective_completed_at || item.completed_at || '';
      const scopeLabel = String(item.assignment_scope || '').toLowerCase() === 'workspace' ? 'Workspace-wide assignment' : 'Assigned to individual';
      const dueLabel = item.due_date ? formatDate(item.due_date) : 'No due date';
      const completionLabel = effectiveCompletedAt ? formatDate(effectiveCompletedAt) : '';
      const completionBits = [];
      if (completionLabel) completionBits.push(`Completed ${completionLabel}`);
      if (item.effective_quiz_correct != null && item.effective_quiz_total != null) completionBits.push(`Score ${item.effective_quiz_correct}/${item.effective_quiz_total}`);
      else if (item.last_quiz_correct != null && item.last_quiz_total != null) completionBits.push(`Score ${item.last_quiz_correct}/${item.last_quiz_total}`);
      else if (item.effective_score != null) completionBits.push(`Score ${item.effective_score}`);
      else if (item.last_score != null) completionBits.push(`Score ${item.last_score}`);
      return `<article class="assignment-card">
        <div class="assignment-head">
          <div>
            <h4>${escapeHtml(item.module_title || 'Training module')}</h4>
            <p class="helper">${escapeHtml(item.category_label || 'A.I.R.O.N. training')}</p>
          </div>
          <span class="badge ${trainingAssignmentStatusClass(effectiveStatus)}">${escapeHtml(trainingAssignmentStatusLabel(effectiveStatus))}</span>
        </div>
        <div class="assignment-meta">
          <div><span>Scope</span><strong>${escapeHtml(scopeLabel)}</strong></div>
          <div><span>Due</span><strong>${escapeHtml(dueLabel)}</strong></div>
          <div><span>Assigned to</span><strong>${escapeHtml(item.assigned_to_email || 'Workspace')}</strong></div>
          <div><span>Launch path</span><strong>${escapeHtml(item.module_path || '—')}</strong></div>
        </div>
        ${item.sop_title ? `<p class="helper"><strong>SOP link:</strong> ${escapeHtml(item.sop_title)}</p>` : ''}
        ${item.notes ? `<p class="helper">${escapeHtml(item.notes)}</p>` : ''}
        ${completionBits.length ? `<p class="helper"><strong>Completion:</strong> ${escapeHtml(completionBits.join(' · '))}</p>` : ''}
        <div class="assignment-actions">
          ${providerUrl ? `<button type="button" class="button primary small" data-training-launch data-id="${escapeHtml(item.id)}">Launch training</button>` : ''}
          ${canManage ? `<div class="assignment-admin-inline" data-assignment-admin-controls data-id="${escapeHtml(item.id)}">
            <select data-assignment-status>
              <option value="assigned"${String(item.status || '').toLowerCase() === 'assigned' ? ' selected' : ''}>Assigned</option>
              <option value="in_progress"${String(item.status || '').toLowerCase() === 'in_progress' ? ' selected' : ''}>In progress</option>
              <option value="completed"${String(item.status || '').toLowerCase() === 'completed' ? ' selected' : ''}>Completed</option>
              <option value="waived"${String(item.status || '').toLowerCase() === 'waived' ? ' selected' : ''}>Waived</option>
              <option value="cancelled"${String(item.status || '').toLowerCase() === 'cancelled' ? ' selected' : ''}>Cancelled</option>
            </select>
            <input type="date" data-assignment-due value="${escapeHtml(item.due_date || '')}" />
            <input type="text" data-assignment-notes value="${escapeHtml(item.notes || '')}" placeholder="Assignment notes" />
            <button type="button" class="button secondary small" data-assignment-save data-id="${escapeHtml(item.id)}">Save</button>
          </div>` : ''}
        </div>
      </article>`;
    }).join('')}
  </div>`;
}

function renderTrainingAssignmentAdmin(target, options = {}) {
  if (!target) return;
  if (!options.canManage) {
    target.innerHTML = '';
    return;
  }
  target.innerHTML = `<div class="table-card training-assignment-admin-card">
    <div class="training-card-head">
      <div>
        <h3>Assign learning</h3>
        <p class="helper">Assign real A.I.R.O.N. training modules to an individual user or the whole workspace.</p>
      </div>
    </div>
    <form class="stack-form" data-training-assignment-form>
      <div class="form-grid">
        <div class="field">
          <label>Training module</label>
          <select name="moduleKey">
            ${TRAINING_ASSIGNMENT_CATALOG.map(item => `<option value="${escapeHtml(item.moduleKey)}">${escapeHtml(item.moduleTitle)}</option>`).join('')}
          </select>
        </div>
        <div class="field">
          <label>Assignment scope</label>
          <select name="assignmentScope" data-assignment-scope-select>
            <option value="user">Assign to one user</option>
            <option value="workspace">Assign to whole workspace</option>
          </select>
        </div>
        <div class="field" data-assigned-email-block>
          <label>Assign to email</label>
          <input type="email" name="assignedToEmail" placeholder="name@company.com" />
        </div>
        <div class="field">
          <label>Due date</label>
          <input type="date" name="dueDate" />
        </div>
        <div class="field">
          <label>Link to SOP title (optional)</label>
          <input type="text" name="sopTitle" placeholder="SOP-104 Baghouse Lockout" />
        </div>
        <div class="field" style="grid-column:1/-1;">
          <label>Assignment notes</label>
          <textarea name="notes" placeholder="What should the learner focus on, and why is this being assigned?"></textarea>
        </div>
      </div>
      <div class="training-request-actions">
        <button class="button primary" type="submit">Assign learning</button>
      </div>
    </form>
  </div>`;
}

function setTrainingStatus(target, kind, title, message) {
  if (!target) return;
  if (!message) {
    target.hidden = true;
    target.innerHTML = '';
    return;
  }
  target.hidden = false;
  target.className = `local-submit-feedback ${kind || 'info'}`;
  target.innerHTML = `<strong>${escapeHtml(title || 'Training request')}</strong><div>${escapeHtml(message)}</div>`;
}

function renderTrainingRequests(target, items, scopeLabel, options = {}) {
  if (!target) return;
  const rows = Array.isArray(items) ? items : [];
  const canManage = !!options.canManage;
  const statusFilter = String(options.statusFilter || 'all').trim().toLowerCase();
  const filteredRows = statusFilter && statusFilter !== 'all'
    ? rows.filter(item => String(item.status || '').trim().toLowerCase() === statusFilter)
    : rows;

  if (!filteredRows.length) {
    target.innerHTML = `<div class="table-card"><h3>${canManage ? 'Training admin queue' : 'My training requests'}</h3><p class="helper">${canManage ? 'No training requests match the current queue filter.' : 'No training requests have been submitted yet for this view.'}</p></div>`;
    return;
  }

  target.innerHTML = `
    <div class="table-card training-requests-card">
      <div class="training-card-head">
        <div>
          <h3>${canManage ? 'Training admin queue' : 'Training requests'}</h3>
          <p class="helper">${escapeHtml(scopeLabel || 'Requests tied to this workspace.')}</p>
        </div>
        ${canManage ? `
          <div class="training-admin-filter">
            <label>Queue filter</label>
            <select data-training-queue-filter>
              <option value="all"${statusFilter === 'all' ? ' selected' : ''}>All requests</option>
              <option value="open"${statusFilter === 'open' ? ' selected' : ''}>Open</option>
              <option value="in_review"${statusFilter === 'in_review' ? ' selected' : ''}>In review</option>
              <option value="sop_creation_needed"${statusFilter === 'sop_creation_needed' ? ' selected' : ''}>SOP creation needed</option>
              <option value="scheduled"${statusFilter === 'scheduled' ? ' selected' : ''}>Scheduled</option>
              <option value="completed"${statusFilter === 'completed' ? ' selected' : ''}>Completed</option>
              <option value="closed"${statusFilter === 'closed' ? ' selected' : ''}>Closed</option>
            </select>
          </div>` : ''}
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>${canManage ? 'Request' : 'Type'}</th>
            <th>Focus</th>
            ${canManage ? '<th>Submitter</th>' : ''}
            <th>Status</th>
            <th>Submitted</th>
            <th>Attachments</th>
            ${canManage ? '<th>Queue controls</th>' : ''}
          </tr>
        </thead>
        <tbody>
          ${filteredRows.map(item => {
            const focus = item.sop_title || item.equipment_process || item.site_department || 'General request';
            const attachments = Array.isArray(item.attachment_manifest) ? item.attachment_manifest : [];
            const typeDetails = [];
            if (item.title) typeDetails.push(item.title);
            const sopState = trainingSopAvailabilityLabel(item.sop_availability || '');
            if (sopState) typeDetails.push(sopState);
            if (item.sop_creation_requested) typeDetails.push('SOP development requested first');
            if (item.admin_notes) typeDetails.push(`Admin note: ${item.admin_notes}`);
            const statusClass = trainingQueueStatusClass(item.status || 'open');
            return `
              <tr>
                <td>
                  <strong>${escapeHtml(trainingRequestTypeLabel(item.request_type))}</strong>
                  <div class="helper">${escapeHtml(typeDetails.join(' · '))}</div>
                </td>
                <td>${escapeHtml(focus)}</td>
                ${canManage ? `<td><strong>${escapeHtml(item.submitter_name || item.submitter_email || 'Unknown submitter')}</strong><div class="helper">${escapeHtml(item.submitter_email || '')}</div></td>` : ''}
                <td><span class="badge ${statusClass}">${escapeHtml(trainingQueueStatusLabel(item.status || 'open'))}</span></td>
                <td>${escapeHtml(formatDate(item.created_at || item.createdAt || ''))}</td>
                <td>${attachments.length ? `${attachments.length} file${attachments.length === 1 ? '' : 's'}` : '—'}</td>
                ${canManage ? `
                  <td>
                    <div class="training-admin-controls" data-training-admin-controls data-id="${escapeHtml(item.id)}">
                      <select data-training-admin-status>
                        <option value="open"${String(item.status || '').toLowerCase() === 'open' ? ' selected' : ''}>Open</option>
                        <option value="in_review"${String(item.status || '').toLowerCase() === 'in_review' ? ' selected' : ''}>In review</option>
                        <option value="sop_creation_needed"${String(item.status || '').toLowerCase() === 'sop_creation_needed' ? ' selected' : ''}>SOP creation needed</option>
                        <option value="scheduled"${String(item.status || '').toLowerCase() === 'scheduled' ? ' selected' : ''}>Scheduled</option>
                        <option value="completed"${String(item.status || '').toLowerCase() === 'completed' ? ' selected' : ''}>Completed</option>
                        <option value="closed"${String(item.status || '').toLowerCase() === 'closed' ? ' selected' : ''}>Closed</option>
                      </select>
                      <input type="date" data-training-admin-scheduled value="${escapeHtml(item.scheduled_for || '')}" />
                      <input type="text" data-training-admin-notes value="${escapeHtml(item.admin_notes || '')}" placeholder="Admin notes / next step" />
                      <button type="button" class="button secondary small" data-training-admin-save data-id="${escapeHtml(item.id)}">Save</button>
                    </div>
                  </td>` : ''}
              </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
}

function initTrainingPages() {
  document.querySelectorAll('[data-training-page]').forEach(section => {
    const workspaceSlug = section.getAttribute('data-training-page') || workspaceKey || '';
    const form = section.querySelector('[data-training-request-form]');
    const statusEl = section.querySelector('[data-training-submit-feedback]');
    const listEl = section.querySelector('[data-training-results]');
    const assignmentEl = section.querySelector('[data-training-assignment-results]');
    const assignmentAdminEl = section.querySelector('[data-training-assignment-admin]');
    const historyEl = section.querySelector('[data-training-history-results]');
    const fileInput = form ? form.querySelector('input[name="attachments"]') : null;
    const selectedFiles = form ? form.querySelector('[data-selected-training-files]') : null;
    const currentSession = getCurrentSession(workspaceSlug) || getCurrentSession(workspaceKey) || {};
    const roleCode = getRoleCodeForSession(currentSession);
    const canManageQueue = canManageTrainingQueue(roleCode);
    const canManageAssignments = canAssignTraining(roleCode);
    let currentQueueFilter = 'all';
    const nameInput = form ? form.querySelector('input[name="requesterName"]') : null;
    const companyInput = form ? form.querySelector('input[name="companyName"]') : null;
    const emailInput = form ? form.querySelector('input[name="requesterEmail"]') : null;
    const phoneInput = form ? form.querySelector('input[name="requesterPhone"]') : null;
    const sopAvailabilitySelect = form ? form.querySelector('[data-sop-availability-select]') : null;
    const sopCreationBlock = form ? form.querySelector('[data-sop-creation-block]') : null;
    const sopCreationCheckbox = form ? form.querySelector('input[name="sopCreationRequested"]') : null;

    function getLiveToken() {
      const session = getCurrentSession(workspaceSlug) || getCurrentSession(workspaceKey) || currentSession;
      return session && session.mode === 'real-auth' ? (session.accessToken || '') : getLiveAccessToken(workspaceSlug);
    }

    function syncSopFields() {
      if (!sopCreationBlock) return;
      const needsCreation = sopAvailabilitySelect && sopAvailabilitySelect.value === 'needs_creation';
      sopCreationBlock.hidden = !needsCreation;
      if (sopCreationCheckbox && needsCreation && !sopCreationCheckbox.checked) sopCreationCheckbox.checked = true;
      if (sopCreationCheckbox && !needsCreation) sopCreationCheckbox.checked = false;
    }

    if (nameInput && currentSession.displayName && !nameInput.value) nameInput.value = currentSession.displayName;
    if (emailInput && currentSession.email && !emailInput.value) emailInput.value = currentSession.email;
    if (fileInput && selectedFiles) {
      setSelectedFiles(fileInput, selectedFiles);
      fileInput.addEventListener('change', () => setSelectedFiles(fileInput, selectedFiles));
    }
    if (sopAvailabilitySelect) {
      syncSopFields();
      sopAvailabilitySelect.addEventListener('change', syncSopFields);
    }

    let trainingRefreshTimer = null;
    const scheduleTrainingRefresh = () => {
      if (trainingRefreshTimer) window.clearTimeout(trainingRefreshTimer);
      trainingRefreshTimer = window.setTimeout(() => {
        refreshTrainingAssignments();
        refreshTrainingRequests();
        refreshTrainingHistory();
      }, 220);
    };

    if (!section.dataset.trainingAutoRefreshBound) {
      section.dataset.trainingAutoRefreshBound = 'true';
      window.addEventListener('focus', scheduleTrainingRefresh);
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') scheduleTrainingRefresh();
      });
    }

    async function refreshTrainingRequests() {
      if (!listEl) return;
      const liveToken = getLiveToken();
      if (!liveToken) {
        listEl.innerHTML = `<div class="table-card"><h3>My training requests</h3><p class="helper">Sign in with approved workspace access to view and submit training requests.</p></div>`;
        return;
      }
      listEl.innerHTML = `<div class="table-card"><h3>My training requests</h3><p class="helper">Loading training requests...</p></div>`;
      try {
        const response = window.AIRONPortalAPI && typeof window.AIRONPortalAPI.listTrainingRequests === 'function'
          ? await window.AIRONPortalAPI.listTrainingRequests(workspaceSlug, { accessToken: liveToken })
          : await fetch(`/.netlify/functions/portal-training-request?workspace=${encodeURIComponent(workspaceSlug)}`, {
              headers: { Authorization: `Bearer ${liveToken}` }
            }).then(async r => {
              const data = await r.json().catch(() => ({}));
              if (!r.ok) {
                const err = new Error(data.error || `Request failed: ${r.status}`);
                err.detail = data.detail;
                throw err;
              }
              return data;
            });
        renderTrainingRequests(
          listEl,
          response && response.requests ? response.requests : [],
          response && response.scope === 'workspace'
            ? (canManageQueue ? 'Workspace-wide training review and status management.' : 'Workspace-wide review')
            : 'Requests tied to your account',
          { canManage: canManageQueue && response && response.scope === 'workspace', statusFilter: currentQueueFilter }
        );
      } catch (error) {
        console.error(error);
        listEl.innerHTML = `<div class="table-card"><h3>My training requests</h3><p class="helper">Training requests are not available right now.</p></div>`;
      }
    }

    async function refreshTrainingAssignments() {
      if (!assignmentEl) return;
      const liveToken = getLiveToken();
      if (!liveToken) {
        assignmentEl.innerHTML = `<div class="helper">Sign in with approved workspace access to view assigned learning.</div>`;
        if (assignmentAdminEl) assignmentAdminEl.innerHTML = '';
        return;
      }
      assignmentEl.innerHTML = `<div class="helper">Loading assigned learning...</div>`;
      renderTrainingAssignmentAdmin(assignmentAdminEl, { canManage: canManageAssignments });
      try {
        const response = window.AIRONPortalAPI && typeof window.AIRONPortalAPI.listTrainingAssignments === 'function'
          ? await window.AIRONPortalAPI.listTrainingAssignments(workspaceSlug, {
              accessToken: liveToken,
              scope: canManageAssignments ? 'workspace' : 'mine'
            })
          : await fetch(`/.netlify/functions/portal-training-assignment?workspace=${encodeURIComponent(workspaceSlug)}&scope=${encodeURIComponent(canManageAssignments ? 'workspace' : 'mine')}`, {
              headers: { Authorization: `Bearer ${liveToken}` }
            }).then(async r => {
              const data = await r.json().catch(() => ({}));
              if (!r.ok) {
                const err = new Error(data.error || `Request failed: ${r.status}`);
                err.detail = data.detail;
                throw err;
              }
              return data;
            });

        renderTrainingAssignments(assignmentEl, response && response.assignments ? response.assignments : [], { canManage: canManageAssignments });
      } catch (error) {
        console.error(error);
        assignmentEl.innerHTML = `<div class="helper">Assigned learning is not available right now.</div>`;
      }
    }

async function refreshTrainingHistory() {
  if (!historyEl) return;
  const liveToken = getLiveToken();
  if (!liveToken) {
    historyEl.innerHTML = `<div class="helper">Sign in with approved workspace access to view certificates and training history.</div>`;
    return;
  }
  historyEl.innerHTML = `<div class="helper">Loading training history...</div>`;
  try {
    const response = window.AIRONPortalAPI && typeof window.AIRONPortalAPI.listTrainingHistory === 'function'
      ? await window.AIRONPortalAPI.listTrainingHistory(workspaceSlug, { accessToken: liveToken })
      : await fetch(`/.netlify/functions/portal-training-history?workspace=${encodeURIComponent(workspaceSlug)}`, {
          headers: { Authorization: `Bearer ${liveToken}` }
        }).then(async r => {
          const data = await r.json().catch(() => ({}));
          if (!r.ok) {
            const err = new Error(data.error || `Request failed: ${r.status}`);
            err.detail = data.detail;
            throw err;
          }
          return data;
        });

    renderTrainingHistory(historyEl, response && response.history ? response.history : [], {});
  } catch (error) {
    console.error(error);
    historyEl.innerHTML = `<div class="helper">Training history is not available right now.</div>`;
  }
}



    if (historyEl) {
      historyEl.addEventListener('click', async evt => {
        const certButton = evt.target.closest('[data-training-certificate]');
        if (!certButton) return;
        const liveToken = getLiveToken();
        if (!liveToken) {
          setTrainingStatus(statusEl, 'warn', 'Certificate delivery unavailable', 'Sign in with approved workspace access before requesting certificates.');
          return;
        }
        const completionId = certButton.getAttribute('data-id');
        const originalLabel = certButton.textContent;
        certButton.disabled = true;
        certButton.textContent = 'Sending...';
        setTrainingStatus(statusEl, 'info', 'Certificate delivery', 'Sending certificate to your email...');
        try {
          const response = window.AIRONPortalAPI && typeof window.AIRONPortalAPI.sendTrainingCertificate === 'function'
            ? await window.AIRONPortalAPI.sendTrainingCertificate({ workspaceSlug, completionId }, liveToken)
            : await fetch('/.netlify/functions/portal-training-history', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${liveToken}` },
                body: JSON.stringify({ workspaceSlug, completionId })
              }).then(async r => {
                const data = await r.json().catch(() => ({}));
                if (!r.ok) {
                  const err = new Error(data.error || `Request failed: ${r.status}`);
                  err.detail = data.detail;
                  throw err;
                }
                return data;
              });

          setTrainingStatus(
            statusEl,
            'good',
            'Certificate emailed',
            response && response.message ? response.message : 'Your certificate was emailed successfully.'
          );
          await refreshTrainingHistory();
        } catch (error) {
          console.error(error);
          setTrainingStatus(statusEl, 'warn', 'Certificate delivery unavailable', error.message || 'Please try again.');
        } finally {
          certButton.disabled = false;
          certButton.textContent = originalLabel || 'Email certificate';
        }
      });
    }

    if (assignmentEl) {
      assignmentEl.addEventListener('click', async evt => {

        const launchButton = evt.target.closest('[data-training-launch]');
        if (!launchButton) return;
        const liveToken = getLiveToken();
        if (!liveToken) {
          setTrainingStatus(statusEl, 'warn', 'Training launch unavailable', 'Sign in with approved workspace access before launching assigned learning.');
          return;
        }
        const assignmentId = launchButton.getAttribute('data-id');
        const originalLabel = launchButton.textContent;
        launchButton.disabled = true;
        launchButton.textContent = 'Launching...';
        setTrainingStatus(statusEl, 'info', 'Training launch', 'Verifying portal access and preparing training handoff...');
        try {
          const response = window.AIRONPortalAPI && typeof window.AIRONPortalAPI.createTrainingLaunch === 'function'
            ? await window.AIRONPortalAPI.createTrainingLaunch({ workspaceSlug, assignmentId }, liveToken)
            : await fetch('/.netlify/functions/portal-training-launch', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${liveToken}` },
                body: JSON.stringify({ workspaceSlug, assignmentId })
              }).then(async r => {
                const data = await r.json().catch(() => ({}));
                if (!r.ok) {
                  const err = new Error(data.error || `Request failed: ${r.status}`);
                  err.detail = data.detail;
                  throw err;
                }
                return data;
              });
          if (!response || !response.launchUrl) {
            throw new Error('Training handoff URL was not returned.');
          }
          window.location.href = response.launchUrl;
        } catch (error) {
          console.error(error);
          setTrainingStatus(statusEl, 'warn', 'Training launch unavailable', error.message || 'Please try again.');
          launchButton.disabled = false;
          launchButton.textContent = originalLabel || 'Launch training';
        }
      });

      assignmentAdminEl.addEventListener('change', evt => {
        const scopeSelect = evt.target.closest('[data-assignment-scope-select]');
        if (!scopeSelect) return;
        const formEl = scopeSelect.closest('[data-training-assignment-form]');
        const emailBlock = formEl ? formEl.querySelector('[data-assigned-email-block]') : null;
        if (emailBlock) emailBlock.hidden = scopeSelect.value === 'workspace';
      });

      assignmentAdminEl.addEventListener('submit', async evt => {
        const adminForm = evt.target.closest('[data-training-assignment-form]');
        if (!adminForm) return;
        evt.preventDefault();
        const liveToken = getLiveToken();
        if (!liveToken) {
          setTrainingStatus(statusEl, 'warn', 'Assigned learning not saved', 'Sign in with approved workspace access before assigning learning.');
          return;
        }
        const fd = new FormData(adminForm);
        const moduleKey = String(fd.get('moduleKey') || '').trim();
        const module = getTrainingCatalogModule(moduleKey);
        if (!module) {
          setTrainingStatus(statusEl, 'warn', 'Assigned learning not saved', 'Choose a valid training module.');
          return;
        }
        const assignmentScope = String(fd.get('assignmentScope') || 'user').trim();
        const assignedToEmail = String(fd.get('assignedToEmail') || '').trim().toLowerCase();
        if (assignmentScope === 'user' && !assignedToEmail) {
          setTrainingStatus(statusEl, 'warn', 'Assigned learning not saved', 'Provide the recipient email for a user assignment.');
          return;
        }
        const submitButton = adminForm.querySelector('button[type="submit"]');
        const originalLabel = submitButton ? submitButton.textContent : '';
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = 'Assigning...';
        }
        setTrainingStatus(statusEl, 'info', 'Assigned learning', 'Saving assigned learning...');
        try {
          const payload = {
            workspaceSlug,
            moduleKey: module.moduleKey,
            moduleTitle: module.moduleTitle,
            modulePath: module.modulePath,
            categoryLabel: module.categoryLabel,
            providerUrl: `https://training.dingfelder.co${module.modulePath}`,
            assignmentScope,
            assignedToEmail: assignmentScope === 'workspace' ? '' : assignedToEmail,
            dueDate: String(fd.get('dueDate') || '').trim(),
            sopTitle: String(fd.get('sopTitle') || '').trim(),
            notes: String(fd.get('notes') || '').trim()
          };
          const response = window.AIRONPortalAPI && typeof window.AIRONPortalAPI.createTrainingAssignment === 'function'
            ? await window.AIRONPortalAPI.createTrainingAssignment(payload, liveToken)
            : await fetch('/.netlify/functions/portal-training-assignment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${liveToken}` },
                body: JSON.stringify(payload)
              }).then(async r => {
                const data = await r.json().catch(() => ({}));
                if (!r.ok) {
                  const err = new Error(data.error || `Request failed: ${r.status}`);
                  err.detail = data.detail;
                  throw err;
                }
                return data;
              });
          setTrainingStatus(statusEl, 'good', 'Assigned learning saved', response && response.assignment ? 'The learning assignment was created successfully.' : 'The learning assignment was saved.');
          adminForm.reset();
          const emailBlock = adminForm.querySelector('[data-assigned-email-block]');
          if (emailBlock) emailBlock.hidden = false;
          await refreshTrainingAssignments();
        } catch (error) {
          console.error(error);
          setTrainingStatus(statusEl, 'warn', 'Assigned learning not saved', error.message || 'Please try again.');
        } finally {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalLabel || 'Assign learning';
          }
        }
      });

      assignmentAdminEl.addEventListener('click', async evt => {
        const button = evt.target.closest('[data-assignment-save]');
        if (!button) return;
        const liveToken = getLiveToken();
        if (!liveToken) {
          setTrainingStatus(statusEl, 'warn', 'Assigned learning update not sent', 'Sign in with approved workspace access before managing assigned learning.');
          return;
        }
        const wrap = button.closest('[data-assignment-admin-controls]');
        if (!wrap) return;
        const id = button.getAttribute('data-id');
        const statusSelect = wrap.querySelector('[data-assignment-status]');
        const dueInput = wrap.querySelector('[data-assignment-due]');
        const notesInput = wrap.querySelector('[data-assignment-notes]');
        const originalLabel = button.textContent;
        button.disabled = true;
        button.textContent = 'Saving...';
        setTrainingStatus(statusEl, 'info', 'Assigned learning update', 'Saving assignment changes...');
        try {
          const payload = {
            workspaceSlug,
            assignmentId: id,
            status: statusSelect ? statusSelect.value : 'assigned',
            dueDate: dueInput ? dueInput.value : '',
            notes: notesInput ? notesInput.value : ''
          };
          const response = window.AIRONPortalAPI && typeof window.AIRONPortalAPI.updateTrainingAssignment === 'function'
            ? await window.AIRONPortalAPI.updateTrainingAssignment(payload, liveToken)
            : await fetch('/.netlify/functions/portal-training-assignment', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${liveToken}` },
                body: JSON.stringify(payload)
              }).then(async r => {
                const data = await r.json().catch(() => ({}));
                if (!r.ok) {
                  const err = new Error(data.error || `Request failed: ${r.status}`);
                  err.detail = data.detail;
                  throw err;
                }
                return data;
              });
          setTrainingStatus(statusEl, 'good', 'Assigned learning updated', response && response.assignment ? 'The learning assignment was updated successfully.' : 'The learning assignment was saved.');
          await refreshTrainingAssignments();
        } catch (error) {
          console.error(error);
          setTrainingStatus(statusEl, 'warn', 'Assigned learning update not sent', error.message || 'Please try again.');
        } finally {
          button.disabled = false;
          button.textContent = originalLabel || 'Save';
        }
      });
    }

    if (form) {
      form.addEventListener('submit', async evt => {
        evt.preventDefault();
        const fd = new FormData(form);
        const rawFiles = Array.from((fileInput && fileInput.files) || []);
        const totalBytes = rawFiles.reduce((sum, file) => sum + Number(file.size || 0), 0);
        const tooLarge = rawFiles.find(file => Number(file.size || 0) > DIRECT_UPLOAD_FILE_LIMIT);
        if (tooLarge) {
          setTrainingStatus(statusEl, 'warn', 'Training request not sent', `${tooLarge.name} is too large for the direct request path. Keep single files under ${(DIRECT_UPLOAD_FILE_LIMIT / (1024 * 1024)).toFixed(1)} MB.`);
          return;
        }
        if (totalBytes > DIRECT_UPLOAD_TOTAL_LIMIT) {
          setTrainingStatus(statusEl, 'warn', 'Training request not sent', `This request package is too large. Keep total attachments under ${(DIRECT_UPLOAD_TOTAL_LIMIT / (1024 * 1024)).toFixed(1)} MB.`);
          return;
        }

        const liveToken = getLiveToken();
        if (!liveToken) {
          setTrainingStatus(statusEl, 'warn', 'Training request not sent', 'Sign in with approved workspace access before submitting training requests.');
          return;
        }

        const submitButton = form.querySelector('button[type="submit"]');
        const originalLabel = submitButton ? submitButton.textContent : '';
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = 'Submitting training request...';
        }
        setTrainingStatus(statusEl, 'info', 'Training request', 'Submitting request to the live workspace...');

        try {
          const payload = {
            workspaceSlug,
            requestType: String(fd.get('requestType') || '').trim(),
            requesterName: String(fd.get('requesterName') || currentSession.displayName || '').trim(),
            companyName: String(fd.get('companyName') || '').trim(),
            requesterEmail: String(fd.get('requesterEmail') || currentSession.email || '').trim(),
            requesterPhone: String(fd.get('requesterPhone') || '').trim(),
            siteDepartment: String(fd.get('siteDepartment') || '').trim(),
            equipmentProcess: String(fd.get('equipmentProcess') || '').trim(),
            sopTitle: String(fd.get('sopTitle') || '').trim(),
            sopAvailability: String(fd.get('sopAvailability') || '').trim(),
            sopCreationRequested: fd.get('sopCreationRequested') === 'yes',
            sopCreationScope: String(fd.get('sopCreationScope') || '').trim(),
            headcount: String(fd.get('headcount') || '').trim(),
            requestedDueDate: String(fd.get('requestedDueDate') || '').trim(),
            notes: String(fd.get('notes') || '').trim(),
            attachments: await Promise.all(rawFiles.map(async file => ({
              fileName: file.name,
              fileType: file.type || guessTypeFromName(file.name),
              fileSize: Number(file.size || 0),
              dataBase64: await readFileAsBase64(file)
            })))
          };

          const response = window.AIRONPortalAPI && typeof window.AIRONPortalAPI.submitTrainingRequest === 'function'
            ? await window.AIRONPortalAPI.submitTrainingRequest(payload, liveToken)
            : await fetch('/.netlify/functions/portal-training-request', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${liveToken}`
                },
                body: JSON.stringify(payload)
              }).then(async r => {
                const data = await r.json().catch(() => ({}));
                if (!r.ok) {
                  const err = new Error(data.error || `Request failed: ${r.status}`);
                  err.detail = data.detail;
                  throw err;
                }
                return data;
              });

          setTrainingStatus(
            statusEl,
            'good',
            'Training request submitted',
            response && response.notificationSent === false
              ? 'The request was saved, but email notification is not configured yet.'
              : 'Your training request was saved and routed for follow-up.'
          );

          form.reset();
          if (selectedFiles) setSelectedFiles(fileInput, selectedFiles);
          if (nameInput && currentSession.displayName) nameInput.value = currentSession.displayName;
          if (emailInput && currentSession.email) emailInput.value = currentSession.email;
          if (companyInput && companyInput.defaultValue) companyInput.value = companyInput.defaultValue;
          if (phoneInput && phoneInput.defaultValue) phoneInput.value = phoneInput.defaultValue;
          if (sopAvailabilitySelect) syncSopFields();
          await refreshTrainingRequests();
        } catch (error) {
          console.error(error);
          setTrainingStatus(statusEl, 'warn', 'Training request not sent', error.message || 'Please try again.');
        } finally {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalLabel || 'Submit training request';
          }
        }
      });
    }

    if (listEl) {
      listEl.addEventListener('change', evt => {
        const filter = evt.target.closest('[data-training-queue-filter]');
        if (!filter) return;
        currentQueueFilter = String(filter.value || 'all').trim().toLowerCase() || 'all';
        refreshTrainingRequests();
      });

      listEl.addEventListener('click', async evt => {
        const button = evt.target.closest('[data-training-admin-save]');
        if (!button) return;
        const liveToken = getLiveToken();
        if (!liveToken) {
          setTrainingStatus(statusEl, 'warn', 'Training queue update not sent', 'Sign in with approved workspace access before managing training requests.');
          return;
        }
        const wrap = button.closest('[data-training-admin-controls]');
        const requestId = button.getAttribute('data-id');
        if (!wrap || !requestId) return;
        const statusSelect = wrap.querySelector('[data-training-admin-status]');
        const notesInput = wrap.querySelector('[data-training-admin-notes]');
        const scheduledInput = wrap.querySelector('[data-training-admin-scheduled]');
        const originalLabel = button.textContent;
        button.disabled = true;
        button.textContent = 'Saving...';
        setTrainingStatus(statusEl, 'info', 'Training queue update', 'Saving training request status...');
        try {
          const payload = {
            workspaceSlug,
            requestId,
            status: statusSelect ? statusSelect.value : 'open',
            adminNotes: notesInput ? notesInput.value : '',
            scheduledFor: scheduledInput ? scheduledInput.value : ''
          };
          const response = window.AIRONPortalAPI && typeof window.AIRONPortalAPI.updateTrainingRequestReview === 'function'
            ? await window.AIRONPortalAPI.updateTrainingRequestReview(payload, liveToken)
            : await fetch('/.netlify/functions/portal-training-request', {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${liveToken}`
                },
                body: JSON.stringify(payload)
              }).then(async r => {
                const data = await r.json().catch(() => ({}));
                if (!r.ok) {
                  const err = new Error(data.error || `Request failed: ${r.status}`);
                  err.detail = data.detail;
                  throw err;
                }
                return data;
              });
          setTrainingStatus(statusEl, 'good', 'Training queue updated', response && response.trainingRequest ? 'The training request status was updated successfully.' : 'The training request status was saved.');
          await refreshTrainingRequests();
        } catch (error) {
          console.error(error);
          setTrainingStatus(statusEl, 'warn', 'Training queue update not sent', error.message || 'Please try again.');
        } finally {
          button.disabled = false;
          button.textContent = originalLabel || 'Save';
        }
      });
    }

    refreshTrainingAssignments();
    refreshTrainingRequests();
    refreshTrainingHistory();
  });
}


  async function fetchDocumentLink(documentId, workspaceSlug, action) {
    const liveToken = getLiveAccessToken(workspaceSlug || workspaceKey || '');
    if (!liveToken) throw new Error('Sign in with approved workspace access before opening customer files.');
    if (window.AIRONPortalAPI && typeof window.AIRONPortalAPI.getDocumentLink === 'function') {
      return window.AIRONPortalAPI.getDocumentLink(documentId, workspaceSlug, action, liveToken);
    }
    const qs = new URLSearchParams();
    qs.set('id', documentId);
    qs.set('workspace', workspaceSlug || workspaceKey || '');
    qs.set('action', action || 'open');
    const response = await fetch(`/.netlify/functions/portal-document-link?${qs.toString()}`, {
      headers: liveToken ? { Authorization: `Bearer ${liveToken}` } : {}
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const err = new Error(data.error || `Request failed: ${response.status}`);
      err.detail = data.detail;
      throw err;
    }
    return data;
  }

  async function downloadDocumentViaSignedUrl(signedUrl, fileName) {
    const response = await fetch(signedUrl);
    if (!response.ok) throw new Error('Failed to download the file from storage.');
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = fileName || 'document';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
  }

  function bindDocumentActionButtons(target, workspaceSlug) {
    if (!target) return;
    target.querySelectorAll('[data-doc-action]').forEach(button => {
      button.addEventListener('click', async evt => {
        evt.preventDefault();
        const action = button.getAttribute('data-doc-action') || 'open';
        const documentId = button.getAttribute('data-doc-id') || '';
        const documentName = button.getAttribute('data-doc-name') || 'document';
        if (!documentId) return;
        const original = button.textContent;
        button.disabled = true;
        button.textContent = action === 'download' ? 'Preparing…' : 'Opening…';
        try {
          const payload = await fetchDocumentLink(documentId, workspaceSlug, action);
          if (!payload || !payload.signed_url) throw new Error('No signed file URL was returned.');
          if (action === 'download') {
            await downloadDocumentViaSignedUrl(payload.signed_url, documentName);
          } else {
            window.open(payload.signed_url, '_blank', 'noopener');
          }
        } catch (error) {
          console.error(error);
          window.alert(error.message || 'The file could not be opened.');
        } finally {
          button.disabled = false;
          button.textContent = original;
        }
      });
    });
  }

  function bucketBadge(bucket) {
    return bucket === 'portal-private'
      ? `<span class="badge good">Customer file library</span>`
      : `<span class="badge dim">Reference intake</span>`;
  }

  function renderDocumentsWorkspace(target, rows, workspaceSlug) {
    if (!target) return;
    const items = Array.isArray(rows) ? rows : [];
    const liveCount = items.filter(item => item.storage_bucket === 'portal-private').length;
    const previewCount = items.filter(item => item.storage_bucket !== 'portal-private').length;
    const poCount = items.filter(item => item.po_number).length;
    const newest = items.length ? formatDate(items[0].created_at || '') : 'No live rows yet';

    const summary = `
      <div class="summary-grid documents-summary-grid">
        <div class="summary-card"><span class="big">${items.length}</span><strong>Total document rows</strong><p>Visible for this workspace.</p></div>
        <div class="summary-card"><span class="big">${liveCount}</span><strong>Customer file library</strong><p>Rows stored in the customer file library.</p></div>
        <div class="summary-card"><span class="big">${previewCount}</span><strong>Reference intake</strong><p>Rows reserved for reference or intake tracking.</p></div>
        <div class="summary-card"><span class="big">${poCount}</span><strong>P.O. / reference tagged</strong><p>Rows carrying a purchase order or case reference.</p></div>
      </div>
      <div class="documents-meta-strip">
        <span class="status-pill">Workspace: ${escapeHtml(workspaceSlug)}</span>
        <span class="request-id-pill">Newest intake: ${escapeHtml(newest)}</span>
      </div>`;

    if (!items.length) {
      target.innerHTML = `${summary}<div class="table-card"><h3>Live document library</h3><p class="helper">No document rows are available yet for this workspace. Use Upload Center to capture file intake and this page will populate here.</p></div>`;
      return;
    }

    target.innerHTML = `${summary}
      <div class="table-card">
        <h3>Live document library</h3>
        <p class="helper">These rows are shown for the current workspace. Customer library files and reference intake rows remain visually distinct.</p>
        <table class="table">
          <thead>
            <tr><th>Title</th><th>Category</th><th>File</th><th>Bucket</th><th>P.O./Ref</th><th>Captured</th><th>Actions</th></tr>
          </thead>
          <tbody>
            ${items.map(item => `
              <tr>
                <td>${escapeHtml(item.title || '')}</td>
                <td>${escapeHtml(item.category || '')}</td>
                <td>${escapeHtml(item.file_name || '')}</td>
                <td>${bucketBadge(item.storage_bucket)}</td>
                <td>${escapeHtml(item.po_number || '—')}</td>
                <td>${escapeHtml(formatDate(item.created_at || ''))}</td>
                <td>
                  ${item.storage_bucket === 'portal-private' && item.id ? `
                    <div class="doc-actions">
                      <button type="button" class="button secondary small" data-doc-action="open" data-doc-id="${escapeHtml(item.id)}" data-doc-name="${escapeHtml(item.file_name || 'document')}">Open</button>
                      <button type="button" class="button ghost small" data-doc-action="download" data-doc-id="${escapeHtml(item.id)}" data-doc-name="${escapeHtml(item.file_name || 'document')}">Download</button>
                    </div>` : `<span class="helper">Reference only</span>`}
                </td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
    bindDocumentActionButtons(target, workspaceSlug);
  }

  async function refreshDocumentsWorkspace(workspaceSlug, target, category, bucket) {
    if (!workspaceSlug || !target) return;
    const liveToken = getLiveAccessToken(workspaceSlug);
    if (!liveToken) {
      target.innerHTML = `<div class="table-card"><h3>Live document library</h3><p class="helper">Sign in with approved workspace access to load live document rows.</p></div>`;
      return;
    }
    target.innerHTML = `<div class="table-card"><p class="helper">Loading live document rows...</p></div>`;
    try {
      const response = window.AIRONPortalAPI && typeof window.AIRONPortalAPI.listDocuments === 'function'
        ? await window.AIRONPortalAPI.listDocuments(workspaceSlug, { category: category || '', limit: 100, bucket: bucket || '', accessToken: liveToken })
        : await fetch(`/.netlify/functions/portal-documents-list?workspace=${encodeURIComponent(workspaceSlug)}&limit=100${category ? `&category=${encodeURIComponent(category)}` : ''}${bucket ? `&bucket=${encodeURIComponent(bucket)}` : ''}`, {
            headers: liveToken ? { Authorization: `Bearer ${liveToken}` } : {}
          }).then(async r => {
            const data = await r.json().catch(() => ({}));
            if (!r.ok) {
              const err = new Error(data.error || `Request failed: ${r.status}`);
              err.detail = data.detail;
              throw err;
            }
            return data;
          });
      renderDocumentsWorkspace(target, response && response.documents ? response.documents : [], workspaceSlug);
    } catch (error) {
      console.error(error);
      target.innerHTML = `<div class="table-card"><h3>Live document library</h3><p class="helper">Live document rows are not available right now.</p></div>`;
    }
  }

  function initLiveDocumentsPages() {
    document.querySelectorAll('[data-documents-page]').forEach(section => {
      const workspaceSlug = section.getAttribute('data-documents-page') || workspaceKey || '';
      const target = section.querySelector('[data-documents-results]');
      const categorySelect = section.querySelector('[data-doc-category-filter]');
      const bucketSelect = section.querySelector('[data-doc-bucket-filter]');
      const refresh = () => refreshDocumentsWorkspace(
        workspaceSlug,
        target,
        categorySelect ? categorySelect.value : '',
        bucketSelect ? bucketSelect.value : ''
      );
      if (categorySelect) categorySelect.addEventListener('change', refresh);
      if (bucketSelect) bucketSelect.addEventListener('change', refresh);
      refresh();
    });
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  initTrainingPages();
})();
