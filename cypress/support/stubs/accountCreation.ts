export const stubAccountCreation = (statusCode = 201) => {
  cy.intercept('POST', '/api/accounts', {
    statusCode,
    body: {
      token: {
        accessToken: 'mock-access-token',
        tokenType: 'Bearer',
        expires: '2026-12-31T00:00:00Z',
        refreshToken: 'mock-refresh-token',
      },
    },
  }).as('accountCreation')
}
