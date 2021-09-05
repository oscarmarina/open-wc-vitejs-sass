# OPEN-WC & VITEJS & SCSS

- ## [open-wc](https://github.com/open-wc/open-wc)

  - scaffold
  - lint
  - format
  - test

- ## [vitejs](https://vitejs.dev/)

  - dev server
  - build command

- ## [sass](https://github.com/oscarmarina/sass-style-template)
  - SCSS watcher with autoprefixer

<hr>

## Installation

```bash
npm i
```

## Usage

```html
<script type="module">
  import 'my-element-openwc-vitejs/my-element-openwc-vitejs.js';
</script>

<my-element-openwc-vitejs></my-element-openwc-vitejs>
```

<hr>

## open-wc

### Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

### Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

### Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

<hr>

## vitejs

### dev server

```bash
npm run vite
```

### build command

- [vitejs - static-deploy](https://vitejs.dev/guide/static-deploy.html)

```bash
npm run vite-build
```

<hr>

### sass

SCSS watcher with autoprefixer

```bash
npm run sass:watch
```
<hr>

## scripts - package.json

```json
"scripts": {
    "start": "concurrently -k -r \"npm:sass:watch\" \"npm:vite\"",
    "start-open": "web-dev-server",
    "format": "eslint --ext .js,.html . --fix --ignore-path .gitignore && prettier \"**/*.js\" --write --ignore-path .gitignore",
    "lint": "eslint --ext .js,.html . --ignore-path .gitignore && prettier \"**/*.js\" --check --ignore-path .gitignore",
    "sass:watch": "sass-style-template",
    "test": "web-test-runner --coverage",
    "test:watch": "web-test-runner --watch",
    "vite": "vite",
    "vite-build": "vite build",
    "vite-preview": "vite preview"
  },
```
