const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.cy.js',
    supportFile: 'cypress/support/integration.js',

    trashAssetsBeforeRuns: false,

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: `report-${new Date().toISOString().replace(/:/g, '-')}`,
      overwrite: false,
      html: true,
      json: true,
    },

  },

});
