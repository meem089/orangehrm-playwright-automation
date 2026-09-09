const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { AdminPage } = require('../pages/AdminPage');

test.setTimeout(60000);

test('Q3 - Search and edit user status', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const adminPage = new AdminPage(page);

    const username = 'Kumar123';

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    await loginPage.login('Admin', 'admin123');

    await adminPage.goToAdmin();

    await adminPage.searchUser(username);

   await expect(
    page.getByRole('cell', { name: username })
).toBeVisible();

    await adminPage.editUser(username);

   await adminPage.changeStatus();

    await adminPage.saveChanges();

    await page.reload();

    await expect(
        adminPage.statusDropdown
    ).toContainText('Disabled');
    await adminPage.logout();

    await expect(page).toHaveURL(/auth\/login/);
});