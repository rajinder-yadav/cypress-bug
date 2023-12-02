const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fileServerFolder: 'test',
  fixturesFolder: 'test/fixtures',
  screenshotsFolder: 'test/screenshots',
  videosFolder: 'test/videos',
  e2e: {
    specPattern: 'test/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
})
