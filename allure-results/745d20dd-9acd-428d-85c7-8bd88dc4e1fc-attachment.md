# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q3-admin-edit-user.spec.js >> Q3 - Search and edit user role/status
- Location: tests\Q3-admin-edit-user.spec.js:7:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//div[normalize-space()=\'kiran.kumar\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('//div[normalize-space()=\'kiran.kumar\']') with timeout 5000ms
  - waiting for locator('//div[normalize-space()=\'kiran.kumar\']')

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search": kiran.kumar
    - button ""
    - separator
    - list
- banner:
  - heading "Admin" [level=6]
  - heading "/ User Management" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: 12345678 Price
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: User Management 
      - listitem: Job 
      - listitem: Organization 
      - listitem: Qualifications 
      - listitem:
        - link "Nationalities":
          - /url: "#"
      - listitem:
        - link "Corporate Branding":
          - /url: "#"
      - listitem: Configuration 
      - button ""
- heading "System Users" [level=5]
- button ""
- separator
- text: Username
- textbox
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (6) Records Found
- table:
  - rowgroup:
    - row " Username  User Role  Employee Name  Status  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Username "
      - columnheader "User Role "
      - columnheader "Employee Name "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup:
    - row " Admin Admin 12345678 Price Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "12345678 Price"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ffe.aarav ESS FFE-Aarav Sharma Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ffe.aarav"
      - cell "ESS"
      - cell "FFE-Aarav Sharma"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ffe.aditya ESS FFE-Aditya Kumar Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ffe.aditya"
      - cell "ESS"
      - cell "FFE-Aditya Kumar"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ffe.vivaan ESS FFE-Vivaan Patel Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ffe.vivaan"
      - cell "ESS"
      - cell "FFE-Vivaan Patel"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - 'row " testuser${Date.now()} Admin John Doe Enabled  "':
      - cell "":
        - checkbox ""
        - text: 
      - 'cell "testuser${Date.now()}"'
      - cell "Admin"
      - cell "John Doe"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " test_user_1788952011637 ESS 12345678 Price Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "test_user_1788952011637"
      - cell "ESS"
      - cell "12345678 Price"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { LoginPage } = require('../pages/LoginPage');
  3  | const { AdminPage } = require('../pages/AdminPage');
  4  | 
  5  | test.setTimeout(60000);
  6  | 
  7  | test('Q3 - Search and edit user role/status', async ({ page }) => {
  8  | 
  9  |     const loginPage = new LoginPage(page);
  10 |     const adminPage = new AdminPage(page);
  11 | 
  12 |     const username = 'kiran.kumar';
  13 | 
  14 |     await page.goto(
  15 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  16 |     );
  17 | 
  18 |     await loginPage.login('Admin', 'admin123');
  19 | 
  20 |     await adminPage.goToAdmin();
  21 | 
  22 |     await adminPage.searchUser(username);
  23 | 
  24 |     await expect(
  25 |         page.locator(`//div[normalize-space()='${username}']`)
> 26 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  27 | 
  28 |     await adminPage.editUser();
  29 | 
  30 |     await adminPage.changeRoleAndStatus();
  31 | 
  32 |     await adminPage.saveChanges();
  33 | 
  34 |     await page.reload();
  35 | 
  36 |     await expect(
  37 |         adminPage.userRoleDropdown
  38 |     ).toContainText('Admin');
  39 | 
  40 |     await expect(
  41 |         adminPage.statusDropdown
  42 |     ).toContainText('Disabled');
  43 | 
  44 |     // 11. Logout
  45 |     await adminPage.logout();
  46 | 
  47 |     await expect(page).toHaveURL(/auth\/login/);
  48 | });
```