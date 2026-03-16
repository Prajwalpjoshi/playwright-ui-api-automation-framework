import { test, expect } from '@playwright/test';

test('Get Products API', async ({ request }) => {

  const response = await request.get('https://dummyjson.com/products', {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Validate response is successful
  expect(response.ok()).toBeTruthy();

  const data = await response.json();

  // Validate products exist
  expect(data.products.length).toBeGreaterThan(0);

  // Validate product fields
  expect(data.products[0].title).toBeDefined();
  expect(data.products[0].price).toBeDefined();

});