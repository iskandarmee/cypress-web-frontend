const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require('cypress-mochawesome-reporter/plugin')(on);

      on('after:run', (results) => {
        console.log("Event after:run berhasil dipanggil!", results);
      });

      return config;

    },

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: `report-${new Date().toISOString().replace(/:/g, '-')}`,
      overwrite: false,
      html: true,
      json: true,
    }

  },
});
