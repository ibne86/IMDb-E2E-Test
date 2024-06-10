const { defineConfig } = require('cypress');
const { configureVisualRegression } = require('cypress-visual-regression');

module.exports = defineConfig({
  e2e: {
    env: {
      visualRegressionType: 'base'
    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      configureVisualRegression(on)
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36');
        }
        return launchOptions;
      });
    },
    baseUrl: 'https://www.imdb.com',
    viewportWidth: 1024,
    viewportHeight: 660,
  },
});