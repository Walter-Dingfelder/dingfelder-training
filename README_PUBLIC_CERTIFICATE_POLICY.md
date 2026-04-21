# Public Training Certificate Policy

This overlay changes certificate behavior so public/free training completions do not use outbound email.

## Behavior
- **Portal-assigned training** can still email certificates
- **Public/free training** can still use **Save Certificate** for print/save
- Server-side certificate email rejects non-portal sessions too

## Files
- `netlify/functions/airon-certificate-email.js`
- `src/auth/netlifyIdentity.js`
- `src/components/CompletionResultScreen.jsx`

## Install
1. Extract this zip over the training repo root and allow overwrite.
2. Commit once.
3. Deploy once.
