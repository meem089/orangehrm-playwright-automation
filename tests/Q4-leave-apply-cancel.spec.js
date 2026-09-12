const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { LeavePage } = require('../pages/LeavePage');

test.setTimeout(120000);

test('Q4 - Apply Leave, Verify Pending Approval and Cancel Leave', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const leavePage = new LeavePage(page);

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + Math.floor(Math.random() * 30) + 1);

    if (targetDate.getDay() === 0) {
        targetDate.setDate(targetDate.getDate() + 1);
    } else if (targetDate.getDay() === 6) {
        targetDate.setDate(targetDate.getDate() + 2);
    }

    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const day = String(targetDate.getDate()).padStart(2, '0');
    
    const formattedDate = `${year}-${day}-${month}`;
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
        formattedDate,
        formattedDate,
        comments
    );

    await leavePage.applyLeave();

    await leavePage.goToMyLeave();

    const leaveRow = await leavePage.getLeaveRow();

    await expect(leaveRow).toBeVisible({
        timeout: 15000
    });

    await expect(leaveRow).toContainText(
        'Pending Approval'
    );

    await expect(leaveRow).toContainText(
        'CAN - Bereavement'
    );

    await leavePage.cancelLeave();

    const cancelledLeaveRow = page
        .locator('.oxd-table-card')
        .filter({
            hasText: 'CAN - Bereavement'
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