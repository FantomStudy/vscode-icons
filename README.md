# Pierre Icons (Unofficial)

Independent fork of [Pierre Icons](https://github.com/pierrecomputer/vscode-icons) by The Pierre Computer Company, distributed under the original [MIT license](LICENSE.md). This fork is not an official Pierre release.

File icon theme for VS Code with three tiers, per-icon palette colors, and a monochrome Complete variant.

## Themes

The extension ships three icon tiers and a monochrome variant of Complete:

- **Pierre Icons (Minimal, Unofficial)** -- file, folder, text, and image icons only. Monochrome.
- **Pierre Icons (Unofficial)** -- adds language icons (JS, TS, CSS, HTML, Python, Go, Rust, Ruby, Swift, Bash, Markdown) plus font, SVG, JSON, and git. Monochrome.
- **Pierre Icons (Complete, Unofficial)** -- adds framework, tooling, and config icons (React, Vue, Svelte, Astro, Docker, Tailwind, ESLint, Prettier, npm, Vite, webpack, and more). Uses per-icon colors from the [Pierre palette](https://github.com/pierrecomputer/theme).
- **Pierre Icons (Complete Monochrome, Unofficial)** -- the same icons and file associations as Complete, using neutral gray colors for dark and light themes.

## Color system

Colors come from the Pierre palette, using level `400` for dark themes and `600` for light themes -- the same scale used for syntax tokens in the [Pierre color theme](https://github.com/pierrecomputer/theme).

Minimal, default, and Complete Monochrome use neutral gray (`400` for dark themes / `800` for light themes), preserving SVG opacity for duo-tone details. The colored Complete theme applies per-icon colors, with two modes:

- **Single color** (`color(hue)`) -- one palette hue for all paths. Duo-tone icons get visual weight from the `opacity` attribute baked into the SVG's background path.
- **Dual color** (`duoColor(fg, bg)`) -- separate palette hues for foreground and background paths. Requires SVG paths to have `class="fg"` and `class="bg"` attributes (set in Figma). The build injects a `<style>` block to override bg fills via CSS.

## Build

```bash
npm run build
```

This reads source SVGs from `svgs/`, optimizes them with SVGO, stamps dark/light fill colors, and writes the output to `icons/`. Four theme JSON files are generated: `theme-minimal.json`, `theme-default.json`, `theme-complete.json`, and `theme-complete-monochrome.json`.

For development, watch mode rebuilds on SVG changes:

```bash
npm run watch
```

## Load locally

### Run from source (VS Code)

1. Open this folder in VS Code.
2. Run `npm run build`.
3. Press `F5` to launch an Extension Development Host.
4. Choose one of the Pierre Icons (Unofficial) themes from **File Icon Theme**.

### Package a VSIX

```bash
npm run package
```

Then install the generated `.vsix` in VS Code or Cursor.

## Adding icons

1. Add or update SVGs in `svgs/`. For duo-tone icons, use `class="bg"` and `class="fg"` on paths.
2. Add an entry to the appropriate tier array in `scripts/build-icon-theme.mjs`:

```js
// Single color
{ name: "react", color: color(palette.cyan), fileExtensions: ["jsx", "tsx"] }

// Dual color (fg + bg)
{ name: "lang-python", color: duoColor(palette.blue, palette.yellow), fileExtensions: ["py"] }

// Monochrome (no color property)
{ name: "font", fileExtensions: ["ttf", "otf", "woff", "woff2"] }
```

3. Run `npm run build`.

## Fork identity and releases

Version `0.1.0` introduces the independent extension ID `fantomstudy.vscode-icons` and theme IDs prefixed with `fantomstudy-icons`. The original copyright and MIT license are preserved.

This installs separately from the original extension. Select a theme from the unofficial extension after installation; for Complete Monochrome, set `workbench.iconTheme` to `fantomstudy-icons-complete-monochrome`.

The package is private to npm; distribution is through VSIX, VS Marketplace, and Open VSX. Marketplace publication requires a registered `fantomstudy` publisher, the matching Open VSX namespace, and configured publishing credentials. No marketplace publication is performed by opening or merging a PR. The publish workflow runs when a GitHub release is published.
