


describe('Signup Page', () => {
  it('should not submit the form when clicking submit before filling form fields', () => {
  })
  it('should only have 1 api request for the form is submitted', () => {})
  it('should not accept a password/confirm password of 11 characters', () => {})
  it('should not accept a password/confirm password  of 12 when rules are not met', () => {})
  it('should not accept a password/confirm password  of 32 characters when all rules are not met', () => {})
  it('should not accept a password/confirm password  of 33 that meets all rules', () => {})
  it('should not accept a confirm password that does not match the password', () => {})
  it('should put max alpha numeric in all text fields', () => {})
  it('should try sql injection in all fields', () => {})
  it('should click on the submit button twice', () => {})
  it('should show an appropriate error when signing up with an already-registered email', () => {})
  it('should not accept an invalid phone number format', () => {})
  it('should not submit when phone field is empty', () => {})
  it('should not submit when no province is selected', () => {}) 
  it('should show a graceful error message when the auth service is unavailable', () => {})
  it('should not expose password value in the network request payload to nesto backend', () => {})
  it('should not submit the form when only the checkbox is checked and all other fields are empty', () => {})
})