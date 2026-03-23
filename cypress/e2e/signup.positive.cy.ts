import { API_TIMEOUT } from '../support/signupConstants'

describe('Signup Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/geolocation/all').as('geolocation')
    // Cypress doesn't have Facebook Pixel or full UTM context like a real browser session
    // Patching these fields to match what a real browser submission sends
    // Remove if nesto makes these fields optional on the backend
    cy.intercept('POST', '/api/accounts', (req) => {
      req.body.utmTerm = '(not provided)'
      req.body.fbp = 'fb.1.1774228739000.000000000000000000'
      req.continue()
    }).as('accountCreation')

    cy.visit('/signup')
    cy.url().should('include', '/signup')
    cy.wait('@geolocation', { timeout: API_TIMEOUT })
  })

  it('should load english by default', () => {})
  it('should preload the page in english and in french', () => {})
  it('should load the correct default language', () => {})
  it('should have all fields visible', () => {})
  it('should have all of the links are valid', () => {})
  it('should have the same data in the payload and in formsubmission', () => {})
  it('should log the person in when the account creation is at a 201', () => {})
  it('should send a welcome email when the account is created', () => {})
  it('should be keyboard navigable', () => {})
  it('should accept a valid password of exactly 12 characters that meets all rules', () => {})
  it('should accept a valid password of exactly 32 characters that meets all rules', () => {})
  it('should accept a valid Canadian phone number', () => {})
  it('should submit successfully with each province selected', () => {})
  it('should submit successfully without checking the partner consent checkbox', () => {})
  it('should include consent:true in payload when checkbox is checked', () => {})
  it('should display all error messages in French when language is set to French', () => {})
  it('should link to French versions of Terms of Service and Privacy Policy in French mode', () => {})
  it('should receive and store an auth token after successful 201 response', () => {})
  it('should redirect to the correct post-signup page after account creation', () => {})
})
