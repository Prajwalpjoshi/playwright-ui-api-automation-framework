import { test, expect } from '@playwright/test';

test('Get Products API', async ({ request }) => {

  const response = await request.get('https://dummyjson.com/products');

  // Verify status code
  expect(response.status()).toBe(200);

  // Convert response to JSON
  const data = await response.json();

  // Validate response data
  expect(data.products.length).toBeGreaterThan(0);

  // Validate first product structure
  expect(data.products[0]).toHaveProperty('title');
  expect(data.products[0]).toHaveProperty('price');

});