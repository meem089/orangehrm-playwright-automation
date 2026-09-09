const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { PIMPage } = require('../pages/PIMPage');

test.setTimeout(60000);

test('Q2 - Add, search and verify new employee', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const pimPage = new PIMPage(page);

    // Generate random employee data
    const randomNumber = Date.now();

    const firstName = `Test${randomNumber}`;
    const middleName = `User${randomNumber}`;
    const lastName = `Employee${randomNumber}`;
    const employeeId = `${randomNumber}`.slice(-6);

    // 1. Open OrangeHRM login page
    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    // 2. Login with valid Admin credentials
    await loginPage.login('Admin', 'admin123');

    // 3. Navigate to PIM
    await pimPage.goToPIM();

    // 4. Click Add Employee
    await pimPage.clickAddEmployee();

    // 5. Add employee with random data
    await pimPage.addEmployee(
        firstName,
        middleName,
        lastName,
        employeeId
    );

    // 6. Navigate to Employee List
    await pimPage.goToEmployeeList();

    // 7. Search employee by name and employee ID
    const employeeFullName = `${firstName} ${middleName} ${lastName}`;

    await pimPage.searchEmployee(
        employeeFullName,
        employeeId
    );

    // 8. Verify employee appears in the result
    await expect(
        page.getByText(firstName, { exact: false })
    ).toBeVisible();

    // 9. Logout
    await pimPage.logout();

    // 10. Verify logout completed
    await expect(page).toHaveURL(/auth\/login/);
});