import { API_TIMEOUT, UI_TIMEOUT } from '../support/signupConstants'
import { signupSelectors } from '../support/pageObjects/signup.po'
import { validationErrorSelectors } from '../support/pageObjects/signup.po'
import { stubAccountCreation } from '../support/stubs/accountCreation'
import { stubGeolocation } from '../support/stubs/geoLocationStubs'
import { signupLabels } from '../support/data/signupFieldNames'
import { signupValidationLabels } from '../support/data/signupValidationLabels'

// For UI/language/validation tests — fully stubbed
describe('Signup Page - Positive UI and Language Tests', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/geolocation/all').as('geolocation')
    cy.intercept('GET', '/_next/data/**/signup.json*').as('language')
    stubGeolocation()
    stubAccountCreation()
    cy.visit('/signup')
    cy.wait('@geolocation', { timeout: API_TIMEOUT })
  })

  // TODO : Fix when location is used to detect language
  it('should load english by default', () => {
    cy.contains('Create a nesto account').should('be.visible')
  })

  it('should have all fields present on the page', () => {
    Object.values(signupSelectors).forEach((selector) => {
      cy.get(selector).should('exist', { timeout: UI_TIMEOUT })
    })
  })

  it('should preload the province based on location geolocation when the location stubbed to QC instead of ON', () => {
    cy.get(signupSelectors.province).should('have.value', 'QC')
  })

  it('should display all error messages based on language toggle despite geolocation', () => {
    cy.get('[data-testid="header-language-switch"]').should('exist').click()
    cy.get(signupSelectors.submit).click()
    cy.contains('Ce champ est obligatoire').should('be.visible')
  })

  it('should display all field labels in English when on default', () => {
    const labels = signupLabels.en
    cy.wait('@language', { timeout: UI_TIMEOUT })

    cy.contains(labels.heading).should('exist')
    cy.get('[data-testid="first-name-input-placeholder"]').should('contain.text', labels.firstName)
    cy.get('[data-testid="last-name-input-placeholder"]').should('contain.text', labels.lastName)
    cy.get('[data-testid="input-placeholder"]').should('contain.text', labels.phone)
    cy.get('[data-testid="region-select"]').should('contain', labels.province)
    cy.get('[data-testid="email-input-placeholder"]').should('contain.text', labels.email)
    cy.get('[data-testid="password-input-placeholder"]').should('contain.text', labels.password)
    cy.get('[data-testid="passwordConfirmation-input-placeholder"]').should(
      'contain.text',
      labels.confirmPassword
    )
    cy.contains(labels.submit).should('exist')
    cy.contains(labels.loginLink).should('exist')
    cy.contains(labels.checkboxLabel).should('exist')

    cy.contains('Terms of Service').should('have.attr', 'href').and('include', 'terms')
    cy.contains('Privacy Policy').should('have.attr', 'href').and('include', 'privacy')
    cy.contains('Log in').should('have.attr', 'href')

    cy.get(signupSelectors.password).type('1')
    cy.get(signupSelectors.submit).click()
  })

  it('should display english validation errors on submit ', () => {
    const errorLabels = signupValidationLabels.en
    cy.wait('@language', { timeout: UI_TIMEOUT })

    cy.get(signupSelectors.password).type('1') // for error message validation
    cy.get(signupSelectors.submit).click()

    cy.get(validationErrorSelectors.firstNameEmptyError).should(
      'contain.text',
      errorLabels.firstNameError
    )
    cy.get(validationErrorSelectors.lastNameEmptyError).should(
      'contain.text',
      errorLabels.lastNameError
    )
    cy.get(validationErrorSelectors.emailEmptyError).should('contain.text', errorLabels.emailError)
    cy.get(validationErrorSelectors.phoneError).should('contain.text', errorLabels.phoneError)
    cy.get(validationErrorSelectors.passwordError).should('contain.text', errorLabels.passwordError)

    cy.get(validationErrorSelectors.confirmPasswordError).should(
      'contain.text',
      errorLabels.confirmPasswordError
    )
  })

  it('should display french validation errors on submit ', () => {
    cy.get('[data-testid="header-language-switch"]').should('exist').click()
    cy.wait('@language', { timeout: UI_TIMEOUT })

    const errorLabels = signupValidationLabels.fr
    cy.wait('@language', { timeout: UI_TIMEOUT })

    cy.get(signupSelectors.password).type('1') // for error message validation
    cy.get(signupSelectors.submit).click()

    cy.get(validationErrorSelectors.firstNameEmptyError).should(
      'contain.text',
      errorLabels.firstNameError
    )
    cy.get(validationErrorSelectors.lastNameEmptyError).should(
      'contain.text',
      errorLabels.lastNameError
    )
    cy.get(validationErrorSelectors.emailEmptyError).should('contain.text', errorLabels.emailError)
    cy.get(validationErrorSelectors.phoneError).should('contain.text', errorLabels.phoneError)
    cy.get(validationErrorSelectors.passwordError).should('contain.text', errorLabels.passwordError)

    cy.get(validationErrorSelectors.confirmPasswordError).should(
      'contain.text',
      errorLabels.confirmPasswordError
    )
  })

  it('should have valid links in english', () => {
    cy.wait('@language', { timeout: UI_TIMEOUT })
    cy.contains(signupLabels.en.termsLink).should('have.attr', 'href').and('include', 'terms')
    cy.contains(signupLabels.en.privacyLink).should('have.attr', 'href').and('include', 'privacy')
    cy.contains(signupLabels.en.loginLink).should('have.attr', 'href')
  })

  it('should have valid links in French', () => {
    cy.get('[data-testid="header-language-switch"]').should('exist').click()
    cy.wait('@language', { timeout: UI_TIMEOUT })
    cy.contains(signupLabels.fr.termsLink)
      .should('have.attr', 'href')
      .and('include', `conditions-d-utilisation`)
    /* 
    TODO : CHECK IF MISSING PRIVACY POLICY IS INTENTIONAL ON LOWER
    cy.contains(signupLabels.fr.privacyLink)
      .should('have.attr', 'href')
      .and('include', 'confidentialité')
    */
    cy.contains(signupLabels.fr.loginLink).should('have.attr', 'href')
  })

  it('should display all fields in French when language is FR', () => {
    // cy.contains('FR').click()
    cy.get('[data-testid="header-language-switch"]').should('exist').click()
    cy.wait('@language', { timeout: UI_TIMEOUT })
    const labels = signupLabels.fr

    cy.contains(labels.heading).should('exist')
    cy.get('[data-testid="first-name-input-placeholder"]').should('contain.text', labels.firstName)
    cy.get('[data-testid="last-name-input-placeholder"]').should('contain.text', labels.lastName)
    cy.get('[data-testid="input-placeholder"]').should('contain.text', labels.phone)
    cy.get('[data-testid="region-select"]').should('contain', labels.province)
    cy.get('[data-testid="email-input-placeholder"]').should('contain.text', labels.email)
    cy.get('[data-testid="password-input-placeholder"]').should('contain.text', labels.password)
    cy.get('[data-testid="passwordConfirmation-input-placeholder"]').should(
      'contain.text',
      labels.confirmPassword
    )
    cy.contains(labels.submit).should('exist')
    cy.contains(labels.loginLink).should('exist')
    cy.contains(labels.checkboxLabel).should('exist')
  })
})
