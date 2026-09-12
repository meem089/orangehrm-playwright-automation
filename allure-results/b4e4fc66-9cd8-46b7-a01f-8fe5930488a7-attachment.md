# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q4-leave-apply-cancel.spec.js >> Q4 - Apply Leave, Verify Pending Approval and Cancel Leave
- Location: tests\Q4-leave-apply-cancel.spec.js:8:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-table-card').filter({ hasText: 'CAN - Bereavement' }).filter({ hasText: 'Pending Approval' }).first()
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.oxd-table-card').filter({ hasText: 'CAN - Bereavement' }).filter({ hasText: 'Pending Approval' }).first() with timeout 15000ms
  - waiting for locator('.oxd-table-card').filter({ hasText: 'CAN - Bereavement' }).filter({ hasText: 'Pending Approval' }).first()

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
      - paragraph: Habiba Mohammed
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
  6  | test.setTimeout(120000);
  7  | 
  8  | test('Q4 - Apply Leave, Verify Pending Approval and Cancel Leave', async ({ page }) => {
  9  | 
  10 |     const loginPage = new LoginPage(page);
  11 |     const leavePage = new LeavePage(page);
  12 | 
  13 |    const randomDay = Math.floor(Math.random() * 20) + 10;
  14 | const fromDate = `2026-09-${randomDay}`;
  15 | const toDate = `2026-09-${randomDay}`;
  16 |     const comments = `Automation Leave ${Date.now()}`;
  17 | 
  18 |     await page.goto(
  19 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  20 |     );
  21 | 
  22 |     await page.waitForTimeout(2000);
  23 | 
  24 |     await loginPage.login(
  25 |         'Admin',
  26 |         'admin123'
  27 |     );
  28 | 
  29 |     await page.waitForTimeout(2000);
  30 | 
  31 |     await leavePage.goToLeave();
  32 | 
  33 |     await leavePage.clickApplyLeave();
  34 | 
  35 |     await leavePage.selectLeaveType();
  36 | 
  37 |     await leavePage.fillLeaveDetails(
  38 |         fromDate,
  39 |         toDate,
  40 |         comments
  41 |     );
  42 | 
  43 |     await leavePage.applyLeave();
  44 | 
  45 |     await leavePage.goToMyLeave();
  46 | 
  47 |     const leaveRow = await leavePage.getLeaveRow();
  48 | 
> 49 |     await expect(leaveRow).toBeVisible({
     |                            ^ Error: expect(locator).toBeVisible() failed
  50 |         timeout: 15000
  51 |     });
  52 | 
  53 |     await expect(leaveRow).toContainText(
  54 |         'Pending Approval'
  55 |     );
  56 | 
  57 |     await expect(leaveRow).toContainText(
  58 |         'CAN - Bereavement'
  59 |     );
  60 | 
  61 |     await leavePage.cancelLeave();
  62 | 
  63 |     const cancelledLeaveRow = page
  64 |         .locator('.oxd-table-card')
  65 |         .filter({
  66 |             hasText: 'CAN - Bereavement'
  67 |         })
  68 |         .filter({
  69 |             hasText: 'Cancelled'
  70 |         })
  71 |         .first();
  72 | 
  73 |     await expect(cancelledLeaveRow).toBeVisible({
  74 |         timeout: 15000
  75 |     });
  76 | 
  77 |     await expect(cancelledLeaveRow).toContainText(
  78 |         'Cancelled'
  79 |     );
  80 | });
```