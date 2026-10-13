# Leo & Bit · 乐乐和比特

Free bilingual comics (English / 简体中文) for 13-year-olds. Leo, a 13-year-old in Shanghai, and his
pocket robot Bit explore AI, math, physics, chemistry, engineering and earth science, linked to the school curriculum.

免费的中英双语系列漫画。上海13岁少年乐乐和他的口袋机器人比特，一起探索人工智能、数学、物理、化学、工程和地球科学，紧扣校内课程。

**Read it / 在线阅读:** <https://leo-bit.gavin.run/>

| Series | 系列 | Episodes | Links to |
|---|---|---|---|
| AI & Computers | AI与计算机 | 13 | Information technology, grades 7–9 |
| Math Detectives | 数学侦探 | 7 | Shanghai 7th-grade math |
| Physics Explorers | 物理探险 | 6 | Preview of 8th-grade physics |
| Chemistry Kitchen | 化学小厨房 | 6 | Preview of 8th-grade chemistry |
| Build It! | 动手造 | 6 | Technology & engineering (2022 science standard) |
| Earth Rangers | 地球巡游 | 1 | Preview of 8th-grade geography and earth science |

Each episode ends with key words and a hands-on activity for kids and parents.
每集最后都有关键词和一个适合亲子一起完成的小活动。

## Project structure

This repository is published automatically from the private source repo. Don't edit it directly; changes made here are overwritten on the next deploy.

A static site served by GitHub Pages. No build step: `index.html` loads plain deferred `<script>` files in
order, and they share global names (classic scripts, not modules). Episode files are not in `index.html`:
`LBC.loadEpisode(id, n)` injects `data/series/<id>/ep<N>.js` when that episode is opened (cached promise),
and the next episode is prefetched after each render. The first view only loads the shell, the renderer,
the manifest, the series files and one episode.

```
index.html                 page shell: <head>, #app, and the ordered <script defer> list (no episode files)
CNAME, .nojekyll           GitHub Pages custom domain (leo-bit.gavin.run) / no Jekyll
css/styles.css             all styles
js/i18n.js                 T(en,zh), MODE ('both'|'en'|'zh'), pick/hx, UI strings, epNo/cnt, loadMode/setMode
js/core.js                 SERIES + window.LBC registry (registerSeries, registerEpisode, finalize, loadEpisode)
data/manifest.js           LBC.manifest: series ids in display order
data/series/<id>.js        one file per series (title, icon, colour, description, school link, episode titles)
data/series/<id>/ep<N>.js  one file per episode (panels, key words, activity), loaded on demand
js/render/base.js          colours, escaping, SVG text measuring/wrapping, arrows
js/icons.js                icon() / pic() and the ICON2 / PIC2 extension sets
js/render/diagrams.js      hologram diagrams DIAG.<type> and holo()
js/render/characters.js    poses, faces, person(), bit()
js/render/backgrounds.js   scenes (SCENES)
js/render/props.js         props/effects (prop, PROP2, FRONT_PROPS, fxDraw)
js/render/panel.js         NAMES, artSVG, speech bubbles, panelHTML
js/app.js                  views (home / series / episode), hash routing, top bar, contents drawer, phone dock (loaded last)
templates/                 copy-and-edit templates (not loaded by the site)
```

Load order matters: `i18n.js` → `core.js` → `manifest.js` → series files → render files → `app.js`
(→ the current episode, on demand).

URLs: `#home` (or none) = home page · `#<series-id>` = series page (e.g. `#earth`) · `#<series-id>-<n>` = episode
(e.g. `#earth-1`); legacy `#ep<n>` opens AI & Computers episode n. Keep series ids stable, they are part of links.
localStorage keys: `lb-mode` (language), `lb-series` + `lb-ep` (last episode opened), `lb-read` (episodes read).

### Navigation

`index.html` has four landmarks: `#bar` (sticky top bar: home, breadcrumb, language, Contents button, reading
progress line), `#app` (the current view), `#dock` (phone-only bottom bar in the reader: previous · contents ·
next) and `#toc` (the contents drawer, a modal `<dialog>`: side sheet on desktop, bottom sheet on phones).
All of it is drawn by `js/app.js` and styled in the NAVIGATION section of `css/styles.css`. Every link is a real
`<a href="#...">`, so the browser back button works; `hashchange` calls `route()`. Arrow keys ← → move between
episodes. An episode is marked read when the reader scrolls past 85% of it.

Episode and series data must not add their own navigation; the menus, breadcrumb and next/previous links are built
from each series' `titles` list automatically.

## How to add a series

1. Copy `templates/series.js` to `data/series/<id>.js` (`<id>`: lowercase letters only) and fill it in.
   `icon` is an icon name from `js/icons.js`; `color` is the series accent colour.
2. Add `'<id>'` to `LBC.manifest` in `data/manifest.js` at the position it should appear.
3. Add `<script defer src="data/series/<id>.js"></script>` to `index.html`, before `js/render/base.js`.
   Then add at least one episode (below). Episode files get no `<script>` tag.
4. Test locally (see below).

## How to add an episode

1. Copy `templates/episode.js` to `data/series/<id>/ep<N>.js`, where N is the next number (1-based, no gaps;
   the number is the position in the series and the URL `#<id>-<N>`).
2. Set the series id and number in `LBC.registerEpisode('<id>', N, {...})` and write the content.
   All text is bilingual via `T("English","中文")`; dialogue is `[who, "English", "中文"]`.
   Scenes: `room room-night kitchen class field city cyber fair burst lab workshop`.
   Cast: `leo bit mia wang`. Poses: `idle point wave cheer think hold talk`.
   Hologram types are the `DIAG.<type>` functions in `js/render/diagrams.js`; look at existing episodes for examples.
3. Add the episode's title to the end of `titles:[...]` in `data/series/<id>.js`, exactly the same
   `T("English","中文")` as its `t`. Do not add a `<script>` tag; the site loads the file on demand.
   `scripts/check.py` fails if the list and the files don't match.
4. If the series' row in the table above changes, update it.

A missing or misnumbered file shows a `LBC:` warning in the browser console when that episode is opened.

## Test locally

```
for f in $(find js data -name '*.js'); do node --check "$f" || echo "FAIL $f"; done
python3 -m http.server 8000   # then open http://localhost:8000/#<id>-<N>
```

Check the console has no errors and try all three language buttons.
