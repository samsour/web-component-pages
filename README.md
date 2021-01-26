# Web-Component-Pages

This is a template for multiple microsites using web components based on [lit-element](https://lit-element.polymer-project.org/) using [lit-html](https://lit-html.polymer-project.org/).

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

There are two types of web components in this template:
- `components`
- `views`

Both `components` & `views` are technically web components. The only difference is that `views` can be exported as standalone websites including all `components` in it.

## Quickstart

To get started:

```bash
npm install
# requires node 10 & npm 6 or higher

npm run start
# to start a storybook instance for component development

npm run scaffold
# to generate a new component or view

npm run build
# to collect and bundle all necessary components for a specifix view and export them for production ready code
```

## Start developing
A new standalone site can be created by generating a new view `npm run scaffold`. Follow the setups instructions to generate a view. Use PascalCase for the name: `ExampleViewName`

Add some components by using the scaffolder again. Every component extends the LitElement class and fully features lit-html. See this documentation for web component development.

## Build a page
If your want to export a view you can use the build setup. Run `npm run build` to start the export setup and select the view you want to bundle. Once it finishes the view will lay minfied and optimized inside of the `dist` folder.

## Scripts

- `start` runs your app for development, reloading on file changes
- `scaffold` starts a prompt to get you through a component/view generator
- `build` builds your production ready view and outputs it in your `dist` directory
- `lint` runs the linter for this project

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in the project.