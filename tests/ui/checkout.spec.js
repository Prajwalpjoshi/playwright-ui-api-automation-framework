const { test } = require('@playwright/test')
const LoginPage = require('../../pages/LoginPage')
const ProductPage = require('../../pages/ProductPage')
const CartPage = require('../../pages/CartPage')
const CheckoutPage = require('../../pages/CheckoutPage')
const data = require('../../utils/testData')

test('Checkout Product', async ({ page }) => {

 await page.goto('https://www.saucedemo.com')

 const login = new LoginPage(page)
 const product = new ProductPage(page)
 const cart = new CartPage(page)
 const checkout = new CheckoutPage(page)

 await login.login(data.username,data.password)

 await product.addProduct()

 await cart.checkoutProduct()

 await checkout.completeCheckout()

})