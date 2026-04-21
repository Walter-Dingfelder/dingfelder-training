# Return to Portal Training Patch

This patch makes the training-side **Back to Portal** action return users to the real portal `My Training` page after a portal launch.

## Files
- `netlify/functions/airon-portal-launch.js`
- `src/auth/netlifyIdentity.js`
- `src/programs/TrainingModuleShell.jsx`

## What changed
- the training handoff now returns `portalAppUrl` and `portalReturnUrl`
- the training-side portal launch session stores those values
- `TrainingModuleShell` sends **Back to Portal** to the real portal `My Training` route instead of the training home page

## Install
1. Extract this zip over the training repo root and allow overwrite.
2. Commit once.
3. Deploy once.

No new environment variables are required if `PORTAL_APP_URL` is already set.
