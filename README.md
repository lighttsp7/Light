# Light Studio

A responsive AI video studio interface with a Node/Express backend scaffold and a demo preview mode.

## Run locally

Requires Node.js 18 or newer.

```sh
npm install
npm start
```

Then open http://localhost:3000. The video preview works in demo mode without credentials. To use live generation, configure `RUNWAY_API_KEY` in your local environment. Never put API keys in frontend code or commit them to Git.

## Important

This repository contains the website source; pushing code to GitHub does not automatically publish it as a live website. The backend/API route needs a Node-capable host. A static GitHub Pages deployment would not run the Express backend.
