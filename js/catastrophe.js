/* C.A.T.A.S.T.R.O.P.H.E.™
   Core client logic
   Dingfelder Enterprises
*/

(function () {
  "use strict";

  const STORAGE_ACK = "deReadThisAck_v1";

  function qs(sel) {
    return document.querySelector(sel);
  }

  function openModal() {
    const modal = qs(".de-modal");
    if (!modal) return;
    modal.classList.add("is-open");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = qs(".de-modal");
    if (!modal) return;
    modal.classList.remove("is-open");
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  function acknowledged() {
    try {
      return sessionStorage.getItem(STORAGE_ACK) === "1";
    } catch {
      return false;
    }
  }

  function acknowledge() {
    try {
      sessionStorage.setItem(STORAGE_ACK, "1");
    } catch {}
    closeModal();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const continueBtn = qs("[data-de-ack]");
    if (continueBtn) {
      continueBtn.addEventListener("click", acknowledge);
    }

    // Auto-open modal if present and not acknowledged
    if (!acknowledged() && qs(".de-modal")) {
      openModal();
    }

    // Escape intentionally does nothing (life-safety acknowledgment required)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
      }
    });
  });
})();


(function () {
  "use strict";

  const audienceMessages = {
    fire: '<p><strong>For fire departments, EMS, and emergency-service affiliates:</strong> Your review helps show where A.I.R.O.N.-enabled local response support would matter most. C.A.T.A.S.T.R.O.P.H.E. is built into every A.I.R.O.N. deployment, and optional SOS tablets can extend guided information, safer continuity, and offsite coordination into the scene when conditions demand it.</p>',
    business: '<p><strong>For businesses, facilities, and operational leaders:</strong> Your review helps identify where A.I.R.O.N. deployments could strengthen both operational resilience and community-connected emergency response. C.A.T.A.S.T.R.O.P.H.E. is native to every A.I.R.O.N. deployment and can help bring structured guidance, critical information, and safer continuity into high-consequence events.</p>',
    public: '<p><strong>For community members and the general public:</strong> Your interest helps show where local protection, responder support, and community-connected deployment matter most. C.A.T.A.S.T.R.O.P.H.E. is not a standalone public app. It becomes available through A.I.R.O.N. deployments in participating local businesses and operations, helping extend safety and continuity where risk already exists.</p>'
  };

  function setAudience(audience) {
    const panel = document.getElementById("audience-copy");
    const buttons = document.querySelectorAll(".audience-btn");
    if (!panel || !audienceMessages[audience]) return;

    panel.innerHTML = audienceMessages[audience];

    buttons.forEach((btn) => {
      const isActive = btn.dataset.audience === audience;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".audience-btn");
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        setAudience(btn.dataset.audience);
      });
    });

    const initial = document.querySelector(".audience-btn.is-active")?.dataset.audience || "fire";
    setAudience(initial);
  });
})();


(function () {
  const form = document.getElementById("cat-interest-form");
  if (!form) return;

  function encodeFormData(formData) {
    return new URLSearchParams(formData).toString();
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";
    }

    try {
      const formData = new FormData(form);
      formData.set("form-name", "cat-interest");
      if (!formData.get("bot-field")) {
        formData.set("bot-field", "");
      }

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(formData)
      });

      if (!response.ok) {
        throw new Error("Netlify form submission failed");
      }

      window.location.assign("/participate/thanks/");
    } catch (error) {
      console.error("CAT form submission error:", error);
      alert("Submission did not complete. Please try again.");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText || "Submit interest";
      }
    }
  });
})();


(function () {
  const toggles = document.querySelectorAll(".interest-toggle");
  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", next ? "true" : "false");
    });
  });
})();

