  
  import {UI_TIMEOUT} from '../signupConstants'
  export const signupSelectors = {
    
  firstName : '[data-testid="first-name-input"]',
  lastName : '[data-testid="last-name-input"]',
  phoneCountry : '[name="phoneCountry"]',
  phone: '[data-testid="phoneInput"]',
  province :'[data-testid="region-select"]',
  email : '[data-testid="email-input"]',
  password : '[data-testid="password-input"]',
  confirmPassword : '[data-testid="passwordConfirmation-input"]',
  submit : '[data-testid="submit-button"]',
  leadCheckbox : '#leadDistributeConsentAgreement',
  }

  export const fillSignupForm = (data:{
    firstName: string
    lastName: string
    email: string
    phoneCountry: string
    phone: string
    password: string
    confirmPassword: string
  }) =>{
    cy.get(signupSelectors.firstName).should('be.visible', {timeout:UI_TIMEOUT} ).type(data.firstName)
    cy.get(signupSelectors.lastName).should('be.visible',{timeout:UI_TIMEOUT}).type(data.lastName)
    cy.get(signupSelectors.phoneCountry).should('be.visible',{timeout:UI_TIMEOUT}).click();
    cy.contains(`${data.phoneCountry}`).click();
    cy.get(signupSelectors.phone).should('be.visible',{timeout:UI_TIMEOUT}).type(data.phone)
    cy.get(signupSelectors.password).should('be.visible',{timeout:UI_TIMEOUT}).type(data.password)
    cy.get(signupSelectors.confirmPassword).should('be.visible',{timeout:UI_TIMEOUT}).type(data.confirmPassword)
     
  }
   

// Text for Agreeing to contact Nesto/be contacted by data-testid:"typography"