# The Weeknd · Enter the Night

An independent creative presentation adapted from the author's Hoyo Jerez website. The original tunnel, camera movement, animated characters, scene transitions, installations, navigation, and gallery interaction patterns are retained. The visual identity, artwork, music, signage, captions, and destinations are adapted for The Weeknd.

## Run locally

Restored public GitHub Pages edition: [Open Enter the Night](https://global0809.github.io/the-weeknd-experience/).

This independent copy restores the original artist-branded experience from commit `52030dd53f9843a3ec3b003c83d8fb03f487c964`. MONUMENTAL remains live at its existing address. This copy has no native Sites project binding; deploy it through GitHub Pages.

Requires Node.js 20.11 or later. No runtime package installation is needed.

```sh
npm run build
npm run dev
```

Open http://127.0.0.1:4175 . Use an HTTP server; opening index.html directly with file:// cannot load JavaScript modules or 3D assets.

## GitHub Pages

Run `npm run build:pages` to produce `pages-out/` for the repository path `/the-weeknd-experience/`. This deployment build adapts URLs and routing for that path and includes `.nojekyll`. The `gh-pages` branch contains the published static files; Pages serves that branch from its root. To update the public site, rebuild and publish the contents of `pages-out/` to `gh-pages`.

## Explore

Press the illuminated 3D button to enter with sound, or choose **Enter without sound**. Scroll or swipe through the tunnel. The menu opens Music, Visuals, and Connect. Album stands open official listening destinations; the image sphere opens the visual archive. Gallery detail pages retain the grid-size control and full-screen image viewer, with arrow keys and Escape.

The desktop footer contains music play/pause, previous/next preview, mute, and volume controls. Portrait mobile layouts retain the original compact previous/play/next controls. Playback uses eight locally served 30-second official Apple Music excerpts, with metadata preloaded before entry.

Reduced-motion mode provides a normal entrance button and still decorative video frames. If the browser cannot create the 3D scene, the site offers a lighter edition at `/discover.html`. That edition also works without JavaScript.

A sixty-second recording is available at `/preview.html` for a quick, shareable introduction. It shows the actual experience with loading and idle pauses trimmed, accompanied by the same official preview soundtrack. The main experience loads independently of this recording.

## Files

- `source/`: editable production HTML, authored JavaScript modules, styles, and local assets.
- `source-routes/`: individual gallery detail HTML entries.
- `scripts/build.mjs`: creates `out/` using the referenced local asset graph and normal HTML route directories.
- `worker/index.js`: serves media byte ranges for Safari/iOS while ordinary assets use native static hosting.
- `scripts/prepare-hosting.mjs`: creates the native `dist/client` and `dist/server` hosting artifact. Media URLs remain unchanged.
- `scripts/check.mjs`: JavaScript syntax, language metadata, zoom, and content checks.
- `scripts/check-media-ranges.mjs`: verifies media ranges, validators, missing files, and HEAD responses.
- `scripts/serve.mjs`: local server with correct media MIME types and byte-range support.
- `.openai/hosting.json`: unbound native-hosting placeholder; production uses GitHub Pages.
- `source/assets/media-sources.json`: official image, artwork, and link provenance.
- `source/assets/audio/playlist.json`: preview track names, sources, and chapter timings.
- `source/assets/media/video-sources.json`: official preview sources and the video-loop rendering manifest.

This package contains the adapted production modules and assets. It does not reconstruct unpublished source files from the original author's project.

## Attribution

Reference experience: [Hoyo Jerez](https://hoyojerez.com/), supplied by its designer for this adaptation. Artist photographs: the official [Universal Music photo collection](https://www.universal-music.de/the-weeknd/fotos), with individual copyright credits in the source manifest. Album artwork and preview metadata: Apple Music/iTunes. Official destinations are linked directly from the presentation. The Weeknd, XO, artist imagery, and recordings belong to their respective owners. This presentation is an independent creative concept.

## Validation

The delivery is checked in desktop and mobile browser viewports, including the entrance, navigation, media controls, scene stages, gallery filters and lightbox, contact destinations, cookie preference persistence, reduced motion, and recovery when WebGL is unavailable. Browser emulation does not establish physical-device frame rates. See the delivery QA report for the final observed results.
