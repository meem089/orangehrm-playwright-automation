const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { AdminPage } = require('../pages/AdminPage');

test.setTimeout(100000);

test('Q3 - Search and edit user status', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const adminPage = new AdminPage(page);

   const username ='Berneice.Ferry';

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    await page.waitForTimeout(2000);

    await loginPage.login(
        'Admin',
        'admin123'
    );

    await page.waitForTimeout(2000);

    await adminPage.goToAdmin();

    await adminPage.searchUser(username);

    let userRow = page
        .locator('.oxd-table-card')
        .filter({
            hasText: username
        });

    await expect(userRow).toBeVisible();

    await adminPage.editUser(username);

    await adminPage.changeStatus();

    await adminPage.saveChanges();

    await page.reload();

    await page.waitForTimeout(3000);

    await adminPage.searchUser(username);

    userRow = page
        .locator('.oxd-table-card')
        .filter({
            hasText: username
        });

    await expect(userRow).toBeVisible();

    await expect(userRow).toContainText('Disabled');

    await adminPage.logout();

    await expect(page).toHaveURL(
        /auth\/login/
    );
});