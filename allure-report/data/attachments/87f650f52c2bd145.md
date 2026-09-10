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

Locator: locator('.oxd-table-card').filter({ hasText: '2026-25-09 to 2026-26-09' }).filter({ hasText: 'Pending Approval' }).first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.oxd-table-card').filter({ hasText: '2026-25-09 to 2026-26-09' }).filter({ hasText: 'Pending Approval' }).first() with timeout 5000ms
  - waiting for locator('.oxd-table-card').filter({ hasText: '2026-25-09 to 2026-26-09' }).filter({ hasText: 'Pending Approval' }).first()

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
      - paragraph: manda user
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
- text: (12) Records Found
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
  - rowgroup:
    - row " 2026-10-11 to 2026-11-11 manda akhil user US - Bereavement 43.00 1.00 Pending Approval (1.00) Family trip Cancel ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-10-11 to 2026-11-11"
      - cell "manda akhil user"
      - cell "US - Bereavement"
      - cell "43.00"
      - cell "1.00"
      - cell "Pending Approval (1.00)"
      - cell "Family trip"
      - cell "Cancel ":
        - button "Cancel"
        - listitem:
          - button ""
    - row " 2026-10-11 to 2026-11-11 manda akhil user US - Bereavement 43.00 1.00 Cancelled (1.00) Family trip ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-10-11 to 2026-11-11"
      - cell "manda akhil user"
      - cell "US - Bereavement"
      - cell "43.00"
      - cell "1.00"
      - cell "Cancelled (1.00)"
      - cell "Family trip"
      - cell "":
        - listitem:
          - button ""
    - row " 2026-10-11 to 2026-11-11 manda akhil user US - Bereavement 43.00 1.00 Cancelled (1.00) Family trip ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-10-11 to 2026-11-11"
      - cell "manda akhil user"
      - cell "US - Bereavement"
      - cell "43.00"
      - cell "1.00"
      - cell "Cancelled (1.00)"
      - cell "Family trip"
      - cell "":
        - listitem:
          - button ""
    - row " 2026-12-10 to 2026-13-10 manda akhil user US - Bereavement 43.00 2.00 Cancelled (2.00) Family trip ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-12-10 to 2026-13-10"
      - cell "manda akhil user"
      - cell "US - Bereavement"
      - cell "43.00"
      - cell "2.00"
      - cell "Cancelled (2.00)"
      - cell "Family trip"
      - cell "":
        - listitem:
          - button ""
    - row " 2026-12-10 to 2026-13-10 manda akhil user US - Bereavement 43.00 2.00 Pending Approval (2.00) Family trip Cancel ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-12-10 to 2026-13-10"
      - cell "manda akhil user"
      - cell "US - Bereavement"
      - cell "43.00"
      - cell "2.00"
      - cell "Pending Approval (2.00)"
      - cell "Family trip"
      - cell "Cancel ":
        - button "Cancel"
        - listitem:
          - button ""
    - row " 2026-12-10 to 2026-13-10 manda akhil user US - Bereavement 43.00 2.00 Cancelled (2.00) Family trip ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-12-10 to 2026-13-10"
      - cell "manda akhil user"
      - cell "US - Bereavement"
      - cell "43.00"
      - cell "2.00"
      - cell "Cancelled (2.00)"
      - cell "Family trip"
      - cell "":
        - listitem:
          - button ""
    - row " 2026-18-09 to 2026-30-09 manda akhil user CAN - Bereavement -9.00 9.00 Scheduled (9.00) Cancel ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-18-09 to 2026-30-09"
      - cell "manda akhil user"
      - cell "CAN - Bereavement"
      - cell "-9.00"
      - cell "9.00"
      - cell "Scheduled (9.00)"
      - cell
      - cell "Cancel ":
        - button "Cancel"
        - listitem:
          - button ""
    - row " 2026-14-09 to 2026-15-09 manda akhil user US - Bereavement 43.00 2.00 Pending Approval (2.00) Bereavement leave Cancel ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-14-09 to 2026-15-09"
      - cell "manda akhil user"
      - cell "US - Bereavement"
      - cell "43.00"
      - cell "2.00"
      - cell "Pending Approval (2.00)"
      - cell "Bereavement leave"
      - cell "Cancel ":
        - button "Cancel"
        - listitem:
          - button ""
    - row " 2026-11-09 manda akhil user US - Bereavement 43.00 1.00 Pending Approval (1.00) Cancel ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-11-09"
      - cell "manda akhil user"
      - cell "US - Bereavement"
      - cell "43.00"
      - cell "1.00"
      - cell "Pending Approval (1.00)"
      - cell
      - cell "Cancel ":
        - button "Cancel"
        - listitem:
          - button ""
    - row " 2026-10-09 manda akhil user US - Bereavement 43.00 1.00 Pending Approval (1.00) Cancel ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-10-09"
      - cell "manda akhil user"
      - cell "US - Bereavement"
      - cell "43.00"
      - cell "1.00"
      - cell "Pending Approval (1.00)"
      - cell
      - cell "Cancel ":
        - button "Cancel"
        - listitem:
          - button ""
    - row " 2026-09-03 to 2026-13-03 manda akhil user CAN - Personal 18.00 5.00 Pending Approval (5.00) Cancel ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-09-03 to 2026-13-03"
      - cell "manda akhil user"
      - cell "CAN - Personal"
      - cell "18.00"
      - cell "5.00"
      - cell "Pending Approval (5.00)"
      - cell
      - cell "Cancel ":
        - button "Cancel"
        - listitem:
          - button ""
    - row " 2026-09-02 to 2026-10-02 manda akhil user CAN - Personal 18.00 2.00 Pending Approval (2.00) Cancel ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-09-02 to 2026-10-02"
      - cell "manda akhil user"
      - cell "CAN - Personal"
      - cell "18.00"
      - cell "2.00"
      - cell "Pending Approval (2.00)"
      - cell
      - cell "Cancel ":
        - button "Cancel"
        - listitem:
          - button ""
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
  6  | test.setTimeout(90000);
  7  | 
  8  | test('Q4 - Apply Leave, Verify Pending Approval and Cancel Leave', async ({ page }) => {
  9  | 
  10 |     const loginPage = new LoginPage(page);
  11 |     const leavePage = new LeavePage(page);
  12 | 
  13 |     await page.goto(
  14 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  15 |     );
  16 | 
  17 |     await page.waitForTimeout(2000);
  18 | 
  19 |     await loginPage.login(
  20 |         'Admin',
  21 |         'admin123'
  22 |     );
  23 | 
  24 |     await page.waitForTimeout(2000);
  25 | 
  26 |     await leavePage.goToLeave();
  27 | 
  28 |     await leavePage.clickApplyLeave();
  29 | 
  30 |     await leavePage.selectLeaveType();
  31 | 
  32 |     const fromDate = '2026-25-09';
  33 |     const toDate = '2026-26-09';
  34 | 
  35 |     const comments = `Automation Leave ${Date.now()}`;
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
  47 |     const leaveRow = await leavePage.getLeaveRow(
  48 |         fromDate,
  49 |         toDate
  50 |     );
  51 | 
> 52 |     await expect(leaveRow).toBeVisible();
     |                            ^ Error: expect(locator).toBeVisible() failed
  53 | 
  54 |     await expect(leaveRow).toContainText(
  55 |         'Pending Approval'
  56 |     );
  57 | 
  58 |     await leavePage.cancelLeave(
  59 |         fromDate,
  60 |         toDate
  61 |     );
  62 | 
  63 |     const cancelledLeaveRow = page
  64 |         .locator('.oxd-table-card')
  65 |         .filter({
  66 |             hasText: `${fromDate} to ${toDate}`
  67 |         })
  68 |         .filter({
  69 |             hasText: 'Cancelled'
  70 |         })
  71 |         .first();
  72 | 
  73 |     await expect(cancelledLeaveRow).toBeVisible();
  74 | 
  75 |     await expect(cancelledLeaveRow).toContainText(
  76 |         'Cancelled'
  77 |     );
  78 | });
```