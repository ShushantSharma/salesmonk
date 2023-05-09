const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      chromeWebSecurity: false
      // implement node event listeners here
    },
    baseUrl:"https://app.salesmonk.co/",
    viewportHeight:768,
    viewportWidth:1360,
    retries:1,
    chromeWebSecurity: false,
    env:{
      email:"qa.door@yopmail.com"
    }
  },
});
