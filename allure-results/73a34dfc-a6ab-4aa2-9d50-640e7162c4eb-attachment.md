# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q4-leave-apply-cancel.spec.js >> Q4 - Apply Leave, Verify Pending Approval and Cancel Leave
- Location: tests\Q4-leave-apply-cancel.spec.js:8:1

# Error details

```
Test timeout of 70000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-table-card').filter({ hasText: '2026-22-10 to 2026-23-10' }).filter({ hasText: 'Pending Approval' }).first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.oxd-table-card').filter({ hasText: '2026-22-10 to 2026-23-10' }).filter({ hasText: 'Pending Approval' }).first() with timeout 15000ms
  - waiting for locator('.oxd-table-card').filter({ hasText: '2026-22-10 to 2026-23-10' }).filter({ hasText: 'Pending Approval' }).first()
  - Test timeout of 70000ms exceeded.

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
  - heading "Leave" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: test user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem:
        - link "Apply":
          - /url: "#"
      - listitem:
        - link "My Leave":
          - /url: "#"
      - listitem: Entitlements 
      - listitem: Reports 
      - listitem: Configure 
      - listitem:
        - link "Leave List":
          - /url: "#"
      - listitem:
        - link "Assign Leave":
          - /url: "#"
      - button ""
- heading "My Leave List" [level=5]
- button ""
- separator
- text: From Date
- textbox "yyyy-dd-mm": 2026-01-01
- text:  To Date
- textbox "yyyy-dd-mm": 2026-31-12
- text:  Show Leave with Status* Select  Rejected  Cancelled  Pending Approval  Scheduled  Taken  Leave Type -- Select -- 
- separator
- paragraph: "* Required"
- button "Reset"
- button "Search"
- text: No Records Found
- table:
  - rowgroup:
    - row " Date Employee Name Leave Type Leave Balance (Days) Number of Days Status Comments Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Date"
      - columnheader "Employee Name"
      - columnheader "Leave Type"
      - columnheader "Leave Balance (Days)"
      - columnheader "Number of Days"
      - columnheader "Status"
      - columnheader "Comments"
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
  2  | 
  3  | const { LoginPage } = require('../pages/LoginPage');
  4  | const { LeavePage } = require('../pages/LeavePage');
  5  | 
  6  | test.setTimeout(70000);
  7  | 
  8  | test('Q4 - Apply Leave, Verify Pending Approval and Cancel Leave', async ({ page }) => {
  9  | 
  10 |     const loginPage = new LoginPage(page);
  11 |     const leavePage = new LeavePage(page);
  12 | 
  13 |     const fromDate = '2026-22-10';
  14 |      const toDate = '2026-23-10';
  15 |     const comments = `Automation Leave ${Date.now()}`;
  16 | 
  17 |     await page.goto(
  18 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  19 |     );
  20 | 
  21 |     await page.waitForTimeout(2000);
  22 | 
  23 |     await loginPage.login(
  24 |         'Admin',
  25 |         'admin123'
  26 |     );
  27 | 
  28 |     await page.waitForTimeout(2000);
  29 | 
  30 |     await leavePage.goToLeave();
  31 | 
  32 |     await leavePage.clickApplyLeave();
  33 | 
  34 |     await leavePage.selectLeaveType();
  35 | 
  36 |     await leavePage.fillLeaveDetails(
  37 |         fromDate,
  38 |         toDate,
  39 |         comments
  40 |     );
  41 | 
  42 |     await leavePage.applyLeave();
  43 | 
  44 |     await leavePage.goToMyLeave();
  45 | 
  46 |     const leaveRow = await leavePage.getLeaveRow(
  47 |         fromDate,
  48 |         toDate
  49 |     );
  50 | 
> 51 |     await expect(leaveRow).toBeVisible({
     |                            ^ Error: expect(locator).toBeVisible() failed
  52 |         timeout: 15000
  53 |     });
  54 | 
  55 |     await expect(leaveRow).toContainText(
  56 |         'Pending Approval'
  57 |     );
  58 | 
  59 |     await leavePage.cancelLeave(
  60 |         fromDate,
  61 |         toDate
  62 |     );
  63 | 
  64 |     const cancelledLeaveRow = page
  65 |         .locator('.oxd-table-card')
  66 |         .filter({
  67 |             hasText: `${fromDate} to ${toDate}`
  68 |         })
  69 |         .filter({
  70 |             hasText: 'Cancelled'
  71 |         })
  72 |         .first();
  73 | 
  74 |     await expect(cancelledLeaveRow).toBeVisible({
  75 |         timeout: 15000
  76 |     });
  77 | 
  78 |     await expect(cancelledLeaveRow).toContainText(
  79 |         'Cancelled'
  80 |     );
  81 | });
```