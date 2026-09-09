const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { AdminPage } = require('../pages/AdminPage');

test.setTimeout(60000);

test('Q3 - Search and edit user role/status', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const adminPage = new AdminPage(page);

    const username = 'kiran.kumar';

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    await loginPage.login('Admin', 'admin123');

    await adminPage.goToAdmin();

    await adminPage.searchUser(username);

    await expect(
        page.locator(`//div[normalize-space()='${username}']`)
    ).toBeVisible();

    await adminPage.editUser();

    await adminPage.changeRoleAndStatus();

    await adminPage.saveChanges();

    await page.reload();

    await expect(
        adminPage.userRoleDropdown
    ).toContainText('Admin');

    await expect(
        adminPage.statusDropdown
    ).toContainText('Disabled');

    // 11. Logout
    await adminPage.logout();

    await expect(page).toHaveURL(/auth\/login/);
});