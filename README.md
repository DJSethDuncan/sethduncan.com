# SethDuncan.com

I keep all my old sites here. Each site is in its own subfolder. The live one is `2022-12/` (Create React App, React 18, react-router-dom v6). Everything else (e.g. `synthwave/`) is an old, undeployed iteration kept for reference.

## Deployment

Auto-deploys via **Heroku** on every push to `main` (GitHub integration — no `heroku` git remote needed locally).

- Build: the root `package.json`'s `heroku-postbuild` script runs `cd 2022-12 && npm install && npm run build`, producing a real production build.
- Runtime: `npm start` runs `serve -s 2022-12/build -l $PORT` — a static file server, **not** the CRA dev server. (It used to run `react-scripts start` directly; that caused a memory-usage crash since dev-mode webpack keeps the whole unminified module graph, source maps, and file watchers in memory. Don't revert to that.)
- Live at: sethduncan.com

## Music page (`/music`)

- Track/album data lives in `2022-12/src/data/tracks.js` — standalone tracks (`rawTracks`) and multi-track albums (`rawAlbums`), each with `genre`, `name`, `singer`, `year`, `tags`, `musicSrc`, and an optional `cover` (falls back to `DEFAULT_COVER` if unset).
- Audio files themselves are hosted on **Cloudflare R2** (bucket's public dev URL: `https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev`), not committed to the repo. Upload new tracks via the Cloudflare dashboard, then add an entry to `tracks.js` pointing at the file's URL.
- External links (Bandcamp, Spotify, Apple Music, YouTube) are defined in `2022-12/src/components/Music.js`.
