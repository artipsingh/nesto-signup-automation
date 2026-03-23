import { fillSignupForm, signupSelectors } from '../support/pageObjects/signup.po'
import { API_TIMEOUT } from '../support/signupConstants'
import { generateTestUser } from '../support/testData'

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

  it('should return status 201 when an account is created', () => {
    //fully working test, skipping as I work on the other tests
    const user = generateTestUser()
    fillSignupForm(user)
    cy.get(`[data-testid="agreement-checkbox"]`).click()
    cy.get(signupSelectors.submit).click()
    cy.wait('@accountCreation', { timeout: API_TIMEOUT }).then((interceptedit) => {
      cy.log(JSON.stringify(interceptedit.request.body))
      cy.log(JSON.stringify(interceptedit.response?.body))
      expect(interceptedit.response?.statusCode).to.eq(201)
    })
  })
})
