const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { LeavePage } = require('../pages/LeavePage');

test.setTimeout(120000);

test('Q4 - Apply Leave, Verify Pending Approval and Cancel Leave', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const leavePage = new LeavePage(page);

    const fromDate = '2021-01-01';
    const toDate = '2026-31-12';
    const comments = `Automation Leave ${Date.now()}`;

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    await page.waitForTimeout(2000);

    await loginPage.login(
        'Admin',
        'admin123'
    );

    await page.waitForTimeout(2000);

    await leavePage.goToLeave();

    await leavePage.clickApplyLeave();

    await leavePage.selectLeaveType();

    await leavePage.fillLeaveDetails(
        fromDate,
        toDate,
        comments
    );

    await leavePage.applyLeave();

    await leavePage.goToMyLeave();

    const leaveRow = await leavePage.getLeaveRow(
        fromDate,
        toDate
    );

    await expect(leaveRow).toBeVisible({
        timeout: 15000
    });

    await expect(leaveRow).toContainText(
        'Pending Approval'
    );

    await expect(leaveRow).toContainText(
        'CAN - Vacation'
    );

    await leavePage.cancelLeave(
        fromDate,
        toDate
    );

    const cancelledLeaveRow = page
        .locator('.oxd-table-card')
        .filter({
            hasText: fromDate
        })
        .filter({
            hasText: 'CAN - Vacation'
        })
        .filter({
            hasText: 'Cancelled'
        })
        .first();

    await expect(cancelledLeaveRow).toBeVisible({
        timeout: 15000
    });

    await expect(cancelledLeaveRow).toContainText(
        'Cancelled'
    );
});