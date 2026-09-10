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

Locator: locator('.oxd-table-card').filter({ hasText: 'AUTOTEST_1789010760987' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.oxd-table-card').filter({ hasText: 'AUTOTEST_1789010760987' }) with timeout 5000ms
  - waiting for locator('.oxd-table-card').filter({ hasText: 'AUTOTEST_1789010760987' })

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
  12 |     await page.goto(
  13 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  14 |     );
  15 | 
  16 |     await page.waitForTimeout(2000);
  17 |     await loginPage.login(
  18 |         'Admin',
  19 |         'admin123'
  20 |     );
  21 | 
  22 |     await page.waitForTimeout(2000);
  23 |     await leavePage.goToLeave();
  24 | 
  25 |     await leavePage.clickApplyLeave();
  26 | 
  27 |     await leavePage.selectLeaveType();
  28 | 
  29 | 
  30 |     const comments = `AUTOTEST_${Date.now()}`;
  31 | 
  32 | 
  33 |     const fromDate = '2026-23-09';
  34 |     const toDate = '2026-24-09';
  35 |     await leavePage.fillLeaveDetails(
  36 |         fromDate,
  37 |         toDate,
  38 |         comments
  39 |     );
  40 | 
  41 |     await leavePage.applyLeave();
  42 |     await page.waitForTimeout(3000);
  43 | 
  44 |     await leavePage.goToMyLeave();
  45 | 
  46 |     const leaveRow = await leavePage.getLeaveRow(
  47 |         comments
  48 |     );
  49 | 
> 50 |     await expect(leaveRow).toBeVisible();
     |                            ^ Error: expect(locator).toBeVisible() failed
  51 |     await expect(leaveRow).toContainText(
  52 |         'Pending Approval'
  53 |     );
  54 | 
  55 |     // Keep browser visible
  56 |     await page.waitForTimeout(3000);
  57 | 
  58 |     await leavePage.cancelLeave(
  59 |         comments
  60 |     );
  61 | 
  62 |    
  63 |     const cancelledLeaveRow = await leavePage.getLeaveRow(
  64 |         comments
  65 |     );
  66 | 
  67 |     await expect(cancelledLeaveRow).toBeVisible();
  68 | 
  69 |     await expect(cancelledLeaveRow).toContainText(
  70 |         'Cancelled'
  71 |     );
  72 | 
  73 |     // Keep browser visible
  74 |     await page.waitForTimeout(5000);
  75 | });
```