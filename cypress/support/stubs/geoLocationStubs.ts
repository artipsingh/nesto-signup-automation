export const stubGeolocation = (
  province: string = 'QC',
  countryCode: string = 'CA',
  country: string = 'Canada',
  city: string = 'Gatineau',
  region: string = 'Quebec',
  latitude: number = 43.7064,
  longitude: number = -75.7013,
  postal: string = 'K1A'
) => {
  cy.intercept('GET', '/api/geolocation/all', {
    statusCode: 200,
    body: {
      'ipapi.co': {
        ip: '99.239.10.2',
        provider: 'ipapi.co',
        city: city,
        region: region,
        region_code: province,
        country: country,
        country_code: countryCode,
        latitude: latitude,
        longitude: longitude,
        postal: postal,
        error: false,
      },
      'ipinfo.io': {
        ip: '99.239.10.2',
        provider: 'ipinfo.io',
        city: city,
        region: region,
        region_code: province,
        country: country,
        country_code: countryCode,
        latitude: latitude,
        longitude: longitude,
        postal: postal,
        error: false,
      },
    },
  }).as('geolocation')
}
