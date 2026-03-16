const { test, expect } = require('@playwright/test')

test('Get Products API', async ({ request }) => {

 const response = await request.get(
  'https://fakestoreapi.com/products',
  {
    headers: {
      'User-Agent': 'Playwright-Test'
    }
  }
 )

 expect(response.status()).toBe(200)

 const data = await response.json()

 expect(data.length).toBeGreaterThan(0)

})