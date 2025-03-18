const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
    },
  },
});
