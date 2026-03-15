const { test, expect } = require('@playwright/test')
const LoginPage = require('../../pages/LoginPage')
const data = require('../../utils/testData')

test('Login Test', async ({ page }) => {

 await page.goto('https://www.saucedemo.com')

 const login = new LoginPage(page)

 await login.login(data.username,data.password)

 await expect(page.locator('.inventory_list')).toBeVisible()

})