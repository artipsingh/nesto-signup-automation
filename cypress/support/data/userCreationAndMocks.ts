import { faker } from '@faker-js/faker'

export const generateTestUser = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: `arti.p.singh+qanesto${Date.now()}@gmail.com`,
  phoneCountry: 'CA' as const,
  phone: '6472041234',
  password: 'HennyPenny12!',
  confirmPassword: 'HennyPenny12!',
  province: 'ON' as const,
})

export type TestUser = ReturnType<typeof generateTestUser>

// Stubbed response that mirrors real nesto 201 response shape
export const mockAccountCreationResponse = {
  statusCode: 201,
  body: {
    token: {
      accessToken: 'mock-access-token',
      tokenType: 'Bearer',
      expires: '2026-12-31T00:00:00Z',
      refreshToken: 'mock-refresh-token',
    },
  },
}
