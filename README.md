# Blueprint Platform

A Vite + React static web app for a marketplace of self-contained business blueprints.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The app is designed for static hosting such as GitHub Pages.

## Third-party Assets

- `public/vendor/liquidgl/liquidGL.js` is vendored from [`naughtyduk/liquidGL`](https://github.com/naughtyduk/liquidGL), MIT licensed.
- `html2canvas` is loaded from CDN because it is required by liquidGL.
