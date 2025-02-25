const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    includeShadowDom: true,
  },
});
