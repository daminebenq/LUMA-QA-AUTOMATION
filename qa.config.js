const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    experimentalWebKitSupport: true,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
    },
  },
  env: {
    homeUrl: "https://magento.softwaretestingboard.com/",
    ordersUrl: "https://magento.softwaretestingboard.com/sales/guest/form/",
  },
});
