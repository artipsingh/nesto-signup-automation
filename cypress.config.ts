import { defineConfig } from 'cypress'
import * as dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  allowCypressEnv: false,
  screenshotOnRunFailure: true,
  scrollBehavior: 'top',
  taskTimeout: 60000,
  trashAssetsBeforeRuns: true,
  video: true,
  videoCompression: true,
  viewportHeight: 720,
  viewportWidth: 1280,
  waitForAnimations: true,
  watchForFileChanges: true,
  defaultCommandTimeout: 10000,

  e2e: {
    slowTestThreshold: 10000,
    baseUrl: process.env.CYPRESS_BASE_URL,
    supportFile: 'cypress/support/e2e.ts',
    supportFolder: 'cypress/support',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    testIsolation: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
