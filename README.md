# A.I.R.O.N. Safety Training

A.I.R.O.N. Safety Training by Dingfelder Enterprises.

## Host behavior

- `airon.dingfelder.co`
  - shows the animated A.I.R.O.N. splash
  - then routes to the landing page
- `training.dingfelder.co`
  - shows the same animated splash
  - then routes to the training portal

## Build

```bash
npm install
npm run build
```

## Netlify

Use the existing build settings:

- Build command: `npm run build`
- Publish directory: `dist`

React Router is already handled by `netlify.toml`.
