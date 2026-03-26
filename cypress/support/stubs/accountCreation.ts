export const stubAccountCreation = (statusCode = 201) => {
  cy.intercept('POST', '/api/accounts', {
    statusCode,
    body: {
      token: {
        accessToken: 'mock-access-token',
        tokenType: 'Bearer',
        expires: '2026-12-31T00:00:00Z',
        refreshToken: 'mock-refresh-token'
      }
    }
  }).as('accountCreation')
}

/*
cy.intercept('POST', '/api/accounts', (req) => {
      req.body.utmTerm = '(not provided)'
      req.body.fbp = 'fb.1.1774228739000.000000000000000000'
      req.continue()
    }).as('accountCreation')
*/