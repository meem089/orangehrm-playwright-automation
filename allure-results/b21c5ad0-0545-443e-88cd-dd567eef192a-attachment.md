# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q4-leave-apply-cancel.spec.js >> Q4 - Apply Leave, Verify Pending Approval and Cancel Leave
- Location: tests\Q4-leave-apply-cancel.spec.js:8:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-table-card').first()
Expected substring: "CAN - Vacation"
Received string:    "2026-29-10John Michael DoeUS - Vacation59.001.00Pending Approval (1.00) Cancel "
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('.oxd-table-card').first() with timeout 5000ms
  - waiting for locator('.oxd-table-card').first()
    14 × locator resolved to <div data-v-f2168256="" class="oxd-table-card">…</div>
       - unexpected value "2026-29-10John Michael DoeUS - Vacation59.001.00Pending Approval (1.00) Cancel "

```

```yaml
- row " 2026-29-10 John Michael Doe US - Vacation 59.00 1.00 Pending Approval (1.00) Cancel ":
  - cell "":
    - checkbox ""
    - text: 
  - cell "2026-29-10"
  - cell "John Michael Doe"
  - cell "US - Vacation"
  - cell "59.00"
  - cell "1.00"
  - cell "Pending Approval (1.00)"
  - cell
  - cell "Cancel ":
    - button "Cancel"
    - listitem:
      - button ""
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
  13 |     const fromDate = '2026-20-10';
  14 |     const toDate = '2026-20-10';
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
  46 |     const leaveRow = await leavePage.getLatestLeaveRow();
  47 | 
  48 |     await expect(leaveRow).toBeVisible({
  49 |         timeout: 15000
  50 |     });
  51 | 
  52 |     await expect(leaveRow).toContainText(
  53 |         'Pending Approval'
  54 |     );
  55 | 
> 56 |     await expect(leaveRow).toContainText(
     |                            ^ Error: expect(locator).toContainText(expected) failed
  57 |         'CAN - Vacation'
  58 |     );
  59 | 
  60 |     await leavePage.cancelLatestLeave();
  61 | 
  62 |     const cancelledLeaveRow = await leavePage.getLatestLeaveRow();
  63 | 
  64 |     await expect(cancelledLeaveRow).toBeVisible({
  65 |         timeout: 15000
  66 |     });
  67 | 
  68 |     await expect(cancelledLeaveRow).toContainText(
  69 |         'Cancelled'
  70 |     );
  71 | });
```