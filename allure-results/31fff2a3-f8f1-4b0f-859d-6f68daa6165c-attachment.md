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

Locator: locator('.oxd-table-card').filter({ hasText: 'Darrell81' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.oxd-table-card').filter({ hasText: 'Darrell81' }) with timeout 5000ms
  - waiting for locator('.oxd-table-card').filter({ hasText: 'Darrell81' })

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search": Darrell81
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
- text: (9) Records Found
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
    - row " AutoUser142 Admin Linda Anderson Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "AutoUser142"
      - cell "Admin"
      - cell "Linda Anderson"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " AutoUser86c Admin Linda Anderson Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "AutoUser86c"
      - cell "Admin"
      - cell "Linda Anderson"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " AutoUsere36 Admin Linda Anderson Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "AutoUsere36"
      - cell "Admin"
      - cell "Linda Anderson"
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
    - row " Gouri12345 ESS Gouri Kale Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Gouri12345"
      - cell "ESS"
      - cell "Gouri Kale"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jdoe_ess_gw042448c6qb ESS Taylor Primarymain46682xk0w Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jdoe_ess_gw042448c6qb"
      - cell "ESS"
      - cell "Taylor Primarymain46682xk0w"
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
    - row " ROCeZBs Admin mCrUStC jZBLHSO Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ROCeZBs"
      - cell "Admin"
      - cell "mCrUStC jZBLHSO"
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
  13 |     const username = 'Darrell81';
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
  32 |     let userRow = page
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
  50 |     await adminPage.searchUser(username);
  51 | 
  52 |     userRow = page
  53 |         .locator('.oxd-table-card')
  54 |         .filter({
  55 |             hasText: username
  56 |         });
  57 | 
  58 |     await expect(userRow).toBeVisible();
  59 | 
  60 |     await expect(userRow).toContainText('Disabled');
  61 | 
  62 |     await adminPage.logout();
  63 | 
  64 |     await expect(page).toHaveURL(
  65 |         /auth\/login/
  66 |     );
  67 | });
```