const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 8000,
    requestTimeout: 5000,
    retries:{
        runMode: 1,
        openMode: 0
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
