const { test } = require('@playwright/test')
const LoginPage = require('../../pages/LoginPage')
const ProductPage = require('../../pages/ProductPage')
const data = require('../../utils/testData')

test('Add Product To Cart', async ({ page }) => {

 await page.goto('https://www.saucedemo.com')

 const login = new LoginPage(page)
 const product = new ProductPage(page)

 await login.login(data.username,data.password)

 await product.addProduct()

})