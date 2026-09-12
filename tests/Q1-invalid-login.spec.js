const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.setTimeout(60000);

test('Q1-Invalid username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.login('meem123', 'meem123');
    
    await expect(loginPage.errorMessage).toBeVisible({ timeout: 10000 });
    await expect(loginPage.errorMessage).toHaveText('Invalid credentials');
});