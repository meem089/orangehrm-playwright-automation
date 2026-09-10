# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q3-admin-edit-user.spec.js >> Q3 - Search and edit user status
- Location: tests\Q3-admin-edit-user.spec.js:8:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-table-card').filter({ hasText: '12345' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.oxd-table-card').filter({ hasText: '12345' }) with timeout 5000ms
  - waiting for locator('.oxd-table-card').filter({ hasText: '12345' })

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search": "12345"
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
      - paragraph: manda user
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
- text: (7) Records Found
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
    - row " Admin Admin manda user Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "manda user"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " atharvpawar2710 Admin Peter Anderson Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "atharvpawar2710"
      - cell "Admin"
      - cell "Peter Anderson"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Darrell81 ESS Harvey Price Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Darrell81"
      - cell "ESS"
      - cell "Harvey Price"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " FMLName ESS Qwerty LName Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FMLName"
      - cell "ESS"
      - cell "Qwerty LName"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " FMLName1 ESS FName LName Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FMLName1"
      - cell "ESS"
      - cell "FName LName"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Jobinsam@6742 ESS Jobin Sam Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Jobinsam@6742"
      - cell "ESS"
      - cell "Jobin Sam"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Leland8 ESS Muriel Kub Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Leland8"
      - cell "ESS"
      - cell "Muriel Kub"
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
  2  | 
  3  | const { LoginPage } = require('../pages/LoginPage');
  4  | const { AdminPage } = require('../pages/AdminPage');
  5  | 
  6  | test.setTimeout(60000);
  7  | 
  8  | test('Q3 - Search and edit user status', async ({ page }) => {
  9  | 
  10 |     const loginPage = new LoginPage(page);
  11 |     const adminPage = new AdminPage(page);
  12 | 
  13 |     const username = '12345';
  14 | 
  15 |     await page.goto(
  16 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  17 |     );
  18 | 
  19 |     await page.waitForTimeout(2000);
  20 | 
  21 |     await loginPage.login(
  22 |         'Admin',
  23 |         'admin123'
  24 |     );
  25 | 
  26 |     await page.waitForTimeout(2000);
  27 | 
  28 |     await adminPage.goToAdmin();
  29 | 
  30 |     await adminPage.searchUser(username);
  31 | 
  32 |     const userRow = page
  33 |         .locator('.oxd-table-card')
  34 |         .filter({
  35 |             hasText: username
  36 |         });
  37 | 
> 38 |     await expect(userRow).toBeVisible();
     |                           ^ Error: expect(locator).toBeVisible() failed
  39 | 
  40 |     await adminPage.editUser(username);
  41 | 
  42 |     await adminPage.changeStatus();
  43 | 
  44 |     await adminPage.saveChanges();
  45 | 
  46 |     await page.reload();
  47 | 
  48 |     await page.waitForTimeout(3000);
  49 | 
  50 |     await expect(
  51 |         adminPage.statusDropdown
  52 |     ).toContainText('Disabled');
  53 | 
  54 |     await adminPage.logout();
  55 | 
  56 |     await expect(page).toHaveURL(
  57 |         /auth\/login/
  58 |     );
  59 | });
```