# W.A. Sandaru Lakshitha — Portfolio Website

A fast, dependency-free personal portfolio built with semantic HTML, CSS and vanilla JavaScript.
No build step, no `node_modules` — open it, edit it, deploy it.

## Project structure

```
portfolio/
├── index.html                      All sections: Home, About, Resume, Projects, Contact
├── css/styles.css                  Design tokens (colours, fonts, spacing) + responsive layout
├── js/main.js                      Mobile menu, active-section highlighting, footer year
├── assets/
│   ├── Sandaru_Lakshitha_CV.pdf    Your original CV (the file every "Download CV" button serves)
│   └── images/
│       ├── sandaru-portrait-600.webp / .jpg
│       ├── sandaru-portrait-1000.webp / .jpg
│       └── favicon.svg
└── README.md
```

## Run locally

Serve the folder over HTTP (the `download` attribute on the CV buttons needs a server — double-clicking
`index.html` opens it as `file://`, where some browsers ignore it).

**Option A — Python (already installed on most systems)**
```bash
cd portfolio
python3 -m http.server 5173
```
Open http://localhost:5173

**Option B — Node.js**
```bash
cd portfolio
npx serve .
```

**Option C — VS Code:** install the "Live Server" extension, right-click `index.html` → *Open with Live Server*.

## Editing content

| What | Where |
|---|---|
| Colours / fonts / spacing | `:root` variables at the top of `css/styles.css` |
| Text in any section | `index.html` — each section is labelled with a comment |
| Replace the CV | Overwrite `assets/Sandaru_Lakshitha_CV.pdf` (keep the same filename) |
| Add LinkedIn | Search `TODO: LinkedIn` in `index.html` (two places) |
| Add a project repo/demo link | Search `TODO: add repository link` in `index.html` |

## Deploy (free options)

**Netlify (drag & drop, 1 minute)**
1. Go to https://app.netlify.com/drop
2. Drag the whole `portfolio` folder onto the page.
3. You get a live URL immediately; rename it under *Site configuration → Change site name*.

**GitHub Pages**
1. Create a repo named `Za-n-du.github.io` (your GitHub username + `.github.io`).
2. Upload the *contents* of `portfolio/` to the repo root (so `index.html` is at the top level).
3. Settings → Pages → Source: *Deploy from a branch* → `main` / root → Save.
4. Live at https://za-n-du.github.io within a few minutes.

**Vercel**
1. Push the folder to a GitHub repo.
2. https://vercel.com/new → import the repo → Framework preset: *Other* → Deploy.

After deploying, test: open the site on your phone, tap **Download CV** in the hero and About sections,
and confirm the PDF opens/saves. (On iPhone, Safari opens the PDF preview — use the Share button to save it.)

## Tested
- Chromium at 1920, 1440, 768, 430 and 375 px — no horizontal overflow, no console errors, no missing assets.
- All in-page navigation links resolve; active section highlights while scrolling.
- Hero and About "Download CV" buttons download `Sandaru_Lakshitha_CV.pdf`, byte-identical to the supplied CV.
- Mobile menu opens/closes, closes on link tap and on Escape.
