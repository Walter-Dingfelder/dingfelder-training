Training overlay: certificate policy polish pass

Touched files
- src/components/CompletionResultScreen.jsx
- src/utils/trainingCertificate.js

What this overlay changes
1. Print / Save Certificate is available for passed completions even for public/free users.
2. Email Certificate remains visible only for portal-backed users.
3. Completion summary labels distinguish Portal-backed / Retained account / Public / local only.
4. Certificate text distinguishes retained portal records from public completion copies.

Netlify / Supabase actions required
- No new environment variables.
- No database change.
- Deploy the training site after replacing the files above.
