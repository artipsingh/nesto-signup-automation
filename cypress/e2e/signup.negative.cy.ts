import { API_TIMEOUT } from '../support/signupConstants'
import { signupSelectors } from '../support/pageObjects/signup.po'
import { validationErrorSelectors } from '../support/pageObjects/signup.po'
import { stubAccountCreation } from '../support/stubs/accountCreation'
import { stubGeolocation } from '../support/stubs/geoLocationStubs'
import { signupValidationLabels } from '../support/data/signupValidationLabels'

describe('Signup Page - Negative Password Validation', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/geolocation/all').as('geolocation')
    cy.intercept('GET', '/_next/data/**/signup.json*').as('language')
    stubGeolocation()
    stubAccountCreation()
    cy.visit('/signup')
    cy.wait('@geolocation', { timeout: API_TIMEOUT })
  })

  it('should not submit the form when clicking submit before filling form fields', () => {
    cy.get(signupSelectors.submit).click()
    // Assert API was never called
    cy.get('@accountCreation.all').should('have.length', 0)
    // Assert required field errors appear
    cy.get(validationErrorSelectors.firstNameEmptyError).should('exist')
    cy.get(validationErrorSelectors.lastNameEmptyError).should('exist')
    cy.get(validationErrorSelectors.emailEmptyError).should('exist')
    cy.get(validationErrorSelectors.phoneError).should('exist')
  })
  it('should not accept a confirm password that does not match the password', () => {
    cy.get(signupSelectors.password).type('HennyPenny12', { delay: 50 })
    cy.get(signupSelectors.confirmPassword).type('DifferentPass1!', { delay: 50 })
    cy.get(signupSelectors.submit).click()
    cy.get(validationErrorSelectors.confirmPasswordError).should(
      'contain.text',
      signupValidationLabels.en.confirmPasswordError
    )
    cy.get('@accountCreation.all').should('have.length', 0)
  })

  it('should only have 1 api request for the form is submitted', () => {})

  it('should not accept a password/confirm password of 11 characters', () => {
    cy.get(signupSelectors.password).type('ChickenLit1', { delay: 50 })
    cy.get(signupSelectors.submit).click()
    cy.get(validationErrorSelectors.passwordError).should(
      'contain.text',
      signupValidationLabels.en.passwordError
    )
    cy.get('@accountCreation.all').should('have.length', 0)
  })
  it('should not accept a password/confirm password  of 12 when rules are not met', () => {
    cy.get(signupSelectors.password).type('ChickenLit1', { delay: 50 })
    cy.get(signupSelectors.confirmPassword).type('ChickenLit1', { delay: 50 })
    cy.get(validationErrorSelectors.passwordError).should('not.exist')
  })
  it('should not accept a password/confirm password  of 32 characters when all rules are not met', () => {
    cy.get(signupSelectors.password).type('hennypenny12345678901234567890ab', { delay: 50 })
    cy.get(signupSelectors.confirmPassword).type('hennypenny12345678901234567890ab', { delay: 50 })
    cy.get(validationErrorSelectors.passwordError).should('not.exist')
  })
  it('should accept a valid password of exactly 32 characters that meets all rules', () => {
    const maxPassword = 'HennyPenny12345678901234567890Ab' // exactly 32
    cy.get(signupSelectors.password).type(maxPassword, { delay: 50 })
    cy.get(signupSelectors.confirmPassword).type(maxPassword, { delay: 50 })
    cy.get(validationErrorSelectors.passwordError).should('not.exist')
  })

  it('should not accept a password of 33 characters even when rules are met', () => {
    const overMaxPassword = 'HennyPenny12345678901234567890Abc' // exactly 33
    cy.get(signupSelectors.password).type(overMaxPassword, { delay: 50 })
    cy.get(signupSelectors.confirmPassword).type(overMaxPassword, { delay: 50 })
    cy.get(signupSelectors.submit).click()
    cy.get(validationErrorSelectors.passwordError).should(
      'contain.text',
      signupValidationLabels.en.maxPasswordError
    )
    cy.get('@accountCreation.all').should('have.length', 0)
  })
})
