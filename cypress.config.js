const { defineConfig } = require("cypress");
const {
  createEsbuildPlugin,
} = require("./node_modules/@badeball/cypress-cucumber-preprocessor/dist/subpath-entrypoints/esbuild");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const dotenvPlugin = require("cypress-dotenv");
const flowPaths = require("./cypress/fixtures/flows.json");

module.exports = defineConfig({
  chromeWebSecurity: false,
  experimentalWebKitSupport: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/reports/videos",
  video: true,
  viewportWidth: 1280, // depend upon your requirement
  viewportHeight: 1000, // depend upon your requirement
  defaultCommandTimeout: 90000,
  execTimeout: 100000,
  pageLoadTimeout: 100000,
  taskTimeout: 100000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    html: true,
    json: false,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addCucumberPreprocessorPlugin(on, config);
      require("cypress-mochawesome-reporter/plugin")(on);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      config.specPattern = `cypress/e2e/features/${
        flowPaths[config.env.flowName]
      }.feature`;
      config = dotenvPlugin(config);
      return config;
    },
    baseUrl: "https://automationexercise.com",
  },
});
