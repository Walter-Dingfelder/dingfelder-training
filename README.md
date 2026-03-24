# Dingfelder Industrial Campus — Safety Training Portal

React + Vite training portal for the Dingfelder Industrial Campus digital twin.
Deployed on Netlify. All programs compliant with applicable OSHA/NFPA standards.

## Programs

| Path | Program | Standard |
|---|---|---|
| `/` | Portal Home | — |
| `/sat` | S.A.T. Visitor Orientation | Internal |
| `/loto` | LOTO — Foundry Focus | OSHA 29 CFR 1910.147 |
| `/loto-campus` | LOTO — Full Campus | OSHA 29 CFR 1910.147 |
| `/h2s` | H₂S Awareness & SCBA | OSHA 29 CFR 1910.134 |
| `/arcflash` | Arc Flash & Electrical Safety | NFPA 70E · OSHA 1910.333 |
| `/evacuation` | Emergency Evacuation & Muster | OSHA 29 CFR 1910.38 |

## Local Development

```bash
npm install
npm run dev
# Opens at http://localhost:5173
```

## Adding a New Training Program

1. Drop the `.jsx` file into `src/programs/`
2. Add one entry to the `PROGRAMS` array in `src/App.jsx`
3. Push to GitHub — Netlify auto-deploys

## Deploy

Connected to Netlify via GitHub. Every push to `main` triggers a deploy.
Build command: `npm run build`
Publish directory: `dist`
The `netlify.toml` handles React Router redirects automatically.

## Roblox Integration

From IRIS / your in-game training router, link to:
```
https://YOUR-SITE.netlify.app/sat        ← visitor orientation
https://YOUR-SITE.netlify.app/loto       ← foundry LOTO
https://YOUR-SITE.netlify.app/h2s        ← H2S training
https://YOUR-SITE.netlify.app/arcflash   ← arc flash
https://YOUR-SITE.netlify.app/evacuation ← evacuation
https://YOUR-SITE.netlify.app/loto-campus ← full campus LOTO
```

Pass the player's IRIS role as a URL query param for role personalization:
```
/evacuation?role=Foundry+Operator
/h2s?role=Oilfield+Operator
```
(Each program reads `new URLSearchParams(window.location.search).get('role')`)
