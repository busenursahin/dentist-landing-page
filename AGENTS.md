# Repository Guidelines

## Project Structure & Pages

This repository is a small, static Turkish dental-clinic landing site. `index.html` contains the main landing page and `doktorlar.html` contains the doctor page. Shared styles live in `styles.css`, and shared browser behavior lives in `script.js`. Local image assets are in `assets/`; pages also reference remote Unsplash photos, Google Fonts, and Lucide icons. There is no separate source, build, or test directory.

## Build, Test, and Development

There is no package manifest or build system. To preview locally, serve the repository root with any static HTTP server, for example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`. You can also open the HTML files directly, though a local server better matches normal web loading. Before submitting changes, open both pages and check navigation, responsive layouts, images, and the appointment form in a browser. No automated test or lint command is currently configured.

## Coding Style & Naming

Keep the existing lightweight, dependency-free structure. Format HTML, CSS, and JavaScript with two-space indentation. Use semantic HTML elements, descriptive kebab-case CSS classes (for example, `.appointment-form`), and `const` for JavaScript bindings unless reassignment is needed. Keep shared behavior in `script.js` and shared visual rules in `styles.css`; avoid duplicating page-wide styles. Use relative paths for local links and assets, and preserve Turkish copy and `lang="tr"` unless a change specifically calls for otherwise.

## Testing Guidelines

No test framework or coverage target is configured. For changes, manually verify both `index.html` and `doktorlar.html` at desktop and mobile widths. Confirm anchor links and the mobile menu work, and check that any updated form or image behavior remains usable. If automated checks are introduced later, document their commands here.

## Commit & Pull Request Guidelines

Git metadata is not present in this checkout, so no repository-specific commit convention could be confirmed. Use a short imperative commit subject that names the area changed, such as `Improve mobile navigation`. PRs should describe the user-visible change, list manual checks performed, link related work when applicable, and include screenshots for visual changes.

## Configuration & External Resources

The site currently relies on externally hosted fonts, icons, and some photos. Keep local asset references valid and provide meaningful `alt` text for content images. Do not add secrets or private configuration to this static repository.
