// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-axe'

Cypress.on('uncaught:exception', (error) => {
  // Ignore React hydration mismatch error - issue mentioned separately
  if (error.message.includes('Text content does not match server-rendered HTML')) {
    return false
  }
  if (error.message.includes("Cannot read properties of null (reading 'value')")) {
    return false
  }
  // Ignore React minified error
  if (error.message.includes('Minified React error')) {
    return false
  }
  if (error.message.includes('google_tag_manager is not defined')){
    return false
  }
  return true
})
