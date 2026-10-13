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

A static site served by GitHub Pages. No build step: `index.html` loads plain `<script>` files in order,
and they share global names (classic scripts, not modules).

```
index.html                 page shell: <head>, #app, and the ordered <script> list
CNAME, .nojekyll           GitHub Pages custom domain (leo-bit.gavin.run) / no Jekyll
css/styles.css             all styles
js/i18n.js                 T(en,zh), MODE ('both'|'en'|'zh'), pick/hx, UI strings, epNo/cnt, loadMode/setMode
js/core.js                 SERIES + window.LBC registry (registerSeries, registerEpisode, finalize)
data/manifest.js           LBC.manifest: series ids in display order
data/series/<id>.js        one file per series (title, icon, colour, description, school link)
data/series/<id>/ep<N>.js  one file per episode (panels, key words, activity)
js/render/base.js          colours, escaping, SVG text measuring/wrapping, arrows
js/icons.js                icon() / pic() and the ICON2 / PIC2 extension sets
js/render/diagrams.js      hologram diagrams DIAG.<type> and holo()
js/render/characters.js    poses, faces, person(), bit()
js/render/backgrounds.js   scenes (SCENES)
js/render/props.js         props/effects (prop, PROP2, FRONT_PROPS, fxDraw)
js/render/panel.js         NAMES, artSVG, speech bubbles, panelHTML
js/app.js                  cast, page render, routing, navigation, click handling (loaded last)
templates/                 copy-and-edit templates (not loaded by the site)
```

Load order matters: `i18n.js` → `core.js` → `manifest.js` → series/episode data → render files → `app.js`.

URLs: `#<series-id>-<n>` (e.g. `#earth-1`); legacy `#ep<n>` opens AI & Computers episode n.
localStorage keys: `lb-mode`, `lb-series`, `lb-ep`. Keep series ids stable, they are part of links.

## How to add a series

1. Copy `templates/series.js` to `data/series/<id>.js` (`<id>`: lowercase letters only) and fill it in.
   `icon` is an icon name from `js/icons.js`; `color` is the series accent colour.
2. Add `'<id>'` to `LBC.manifest` in `data/manifest.js` at the position it should appear.
3. Add at least one episode (below), then add `<script>` tags to `index.html`, before `js/render/base.js`:
   `<script src="data/series/<id>.js"></script>` followed by its episode files.
4. Test locally (see below).

## How to add an episode

1. Copy `templates/episode.js` to `data/series/<id>/ep<N>.js`, where N is the next number (1-based, no gaps;
   the number is the position in the series and the URL `#<id>-<N>`).
2. Set the series id and number in `LBC.registerEpisode('<id>', N, {...})` and write the content.
   All text is bilingual via `T("English","中文")`; dialogue is `[who, "English", "中文"]`.
   Scenes: `room room-night kitchen class field city cyber fair burst lab workshop`.
   Cast: `leo bit mia wang`. Poses: `idle point wave cheer think hold talk`.
   Hologram types are the `DIAG.<type>` functions in `js/render/diagrams.js`; look at existing episodes for examples.
3. Add `<script src="data/series/<id>/ep<N>.js"></script>` to `index.html` after that series' previous episode.
4. If the series' row in the table above changes, update it.

A missing or misnumbered file shows a `LBC:` warning in the browser console.

## Test locally

```
for f in $(find js data -name '*.js'); do node --check "$f" || echo "FAIL $f"; done
python3 -m http.server 8000   # then open http://localhost:8000/#<id>-<N>
```

Check the console has no errors and try all three language buttons.
