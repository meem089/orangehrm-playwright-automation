# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q2-add-search-employee.spec.js >> Q2 - Add, search and verify new employee
- Location: tests\Q2-add-search-employee.spec.js:7:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Test1789020572529')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Test1789020572529') with timeout 5000ms
  - waiting for getByText('Test1789020572529')

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Bilol Abdurasul
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Employee Information" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints...": Test1789020572529 User1789020572529 Employee1789020572529
- text: Employee Id
- textbox: "572529"
- text: Employment Status -- Select --  Include Current Employees Only  Supervisor Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row " Id  First (& Middle) Name  Last Name  Job Title  Employment Status  Sub Unit  Supervisor  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Id "
      - columnheader "First (& Middle) Name "
      - columnheader "Last Name "
      - columnheader "Job Title "
      - columnheader "Employment Status "
      - columnheader "Sub Unit "
      - columnheader "Supervisor "
      - columnheader "Actions"
  - rowgroup
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
  3  | const { PIMPage } = require('../pages/PIMPage');
  4  | 
  5  | test.setTimeout(60000);
  6  | 
  7  | test('Q2 - Add, search and verify new employee', async ({ page }) => {
  8  | 
  9  |     const loginPage = new LoginPage(page);
  10 |     const pimPage = new PIMPage(page);
  11 | 
  12 |     // Generate random employee data
  13 |     const randomNumber = Date.now();
  14 | 
  15 |     const firstName = `Test${randomNumber}`;
  16 |     const middleName = `User${randomNumber}`;
  17 |     const lastName = `Employee${randomNumber}`;
  18 |     const employeeId = `${randomNumber}`.slice(-6);
  19 | 
  20 |     // 1. Open OrangeHRM login page
  21 |     await page.goto(
  22 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  23 |     );
  24 | 
  25 |     // 2. Login with valid Admin credentials
  26 |     await loginPage.login('Admin', 'admin123');
  27 | 
  28 |     // 3. Navigate to PIM
  29 |     await pimPage.goToPIM();
  30 | 
  31 |     // 4. Click Add Employee
  32 |     await pimPage.clickAddEmployee();
  33 | 
  34 |     // 5. Add employee with random data
  35 |     await pimPage.addEmployee(
  36 |         firstName,
  37 |         middleName,
  38 |         lastName,
  39 |         employeeId
  40 |     );
  41 | 
  42 |     // 6. Navigate to Employee List
  43 |     await pimPage.goToEmployeeList();
  44 | 
  45 |     // 7. Search employee by name and employee ID
  46 |     const employeeFullName = `${firstName} ${middleName} ${lastName}`;
  47 | 
  48 |     await pimPage.searchEmployee(
  49 |         employeeFullName,
  50 |         employeeId
  51 |     );
  52 | 
  53 |     // 8. Verify employee appears in the result
  54 |     await expect(
  55 |         page.getByText(firstName, { exact: false })
> 56 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  57 | 
  58 |     // 9. Logout
  59 |     await pimPage.logout();
  60 | 
  61 |     // 10. Verify logout completed
  62 |     await expect(page).toHaveURL(/auth\/login/);
  63 | });
```