const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { LeavePage } = require('../pages/LeavePage');

test.setTimeout(90000);

test('Q4 - Apply Leave, Verify Pending Approval and Cancel Leave', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const leavePage = new LeavePage(page);
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


    const comments = `AUTOTEST_${Date.now()}`;


    const fromDate = '2026-23-09';
    const toDate = '2026-24-09';
    await leavePage.fillLeaveDetails(
        fromDate,
        toDate,
        comments
    );

    await leavePage.applyLeave();
    await page.waitForTimeout(3000);

    await leavePage.goToMyLeave();

    const leaveRow = await leavePage.getLeaveRow(
        comments
    );

    await expect(leaveRow).toBeVisible();
    await expect(leaveRow).toContainText(
        'Pending Approval'
    );

    // Keep browser visible
    await page.waitForTimeout(3000);

    await leavePage.cancelLeave(
        comments
    );

   
    const cancelledLeaveRow = await leavePage.getLeaveRow(
        comments
    );

    await expect(cancelledLeaveRow).toBeVisible();

    await expect(cancelledLeaveRow).toContainText(
        'Cancelled'
    );

    // Keep browser visible
    await page.waitForTimeout(5000);
});