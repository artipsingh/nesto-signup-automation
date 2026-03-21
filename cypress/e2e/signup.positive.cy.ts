describe('Signup Page', () => {
  it('should load english by default', () => {
    cy.visit('/signup')
    cy.url().should('include', '/signup')
  })

  it('should preload the page in english and in french', () => {})
  it('should load the correct default language', () => {})
  it('should have all fields visible', () => {})
  it('should have all of the links are valid', () => {})
  it('should return status 201 when account is created', () => {})
  it('should have the same data in the payload and in formsubmission', () => {})
  it('should log the person in when the account createion is at a 201', () => {})
  it('should send a welcome email when the account is created', () => {})
  it('should be keyboard navigable', () => {})

})