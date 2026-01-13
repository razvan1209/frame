const { defineConfig } = require("cypress"); //import { defineConfig } from 'cypress'
const { envQA } = require("./cypress/environments/qa/qa.env");
const { envDEV } = require("./cypress/environments/dev/dev.env");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.spec.js", // 👈 This makes sure all `.spec.js` files in `e2e/` are found
    setupNodeEvents(on, config) {
            // implement node event listeners here

      const envName = config.env.environment || 'dev'
      let selectedEnv
      switch (envName) {
        case 'qa':
          selectedEnv = envQA;
          break;
        case 'dev':
          selectedEnv = envDEV;
          break;
        default:
          selectedEnv = envDEV;
      }

    config.baseUrl = selectedEnv.baseUrl
      config.env = {
        ...config.env,
        ...selectedEnv
      }
      return config
    },
  },
});
