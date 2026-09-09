const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { LeavePage } = require('../pages/LeavePage');

test.setTimeout(60000);

test('Q4 - Navigate to Apply Leave', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const leavePage = new LeavePage(page);

    // Open login page
    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    // Login
    await loginPage.login('Admin', 'admin123');

    // Go to Leave
    await leavePage.goToLeave();

    // Click Apply Leave
    await leavePage.clickApplyLeave();

    // Verify Apply Leave page
    await expect(
        page.getByText('Apply Leave', { exact: true })
    ).toBeVisible();
});