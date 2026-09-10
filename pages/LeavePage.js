class LeavePage {

    constructor(page) {
        this.page = page;

        this.leaveMenu = page.locator(
            'a[href="/web/index.php/leave/viewLeaveModule"]'
        );

        this.applyLeaveTab = page.locator(
            "//a[normalize-space()='Apply']"
        );

        this.leaveTypeDropdown = page
            .locator('.oxd-input-group')
            .filter({ hasText: 'Leave Type' })
            .locator('.oxd-select-text');

        this.personalLeaveOption = page.locator(
            "//div[contains(@class,'oxd-select-dropdown')]//div[normalize-space()='CAN - Personal']"
        );

        this.fromDateInput = page.locator(
            "input[placeholder='yyyy-dd-mm']"
        ).first();

        this.toDateInput = page.locator(
            "input[placeholder='yyyy-dd-mm']"
        ).nth(1);

        this.commentsInput = page.locator(
            "textarea.oxd-textarea"
        );

        this.applyButton = page.locator(
            "//button[normalize-space()='Apply']"
        );

        this.myLeaveTab = page.locator(
            "//a[normalize-space()='My Leave']"
        );
    }

    async goToLeave() {
        await this.leaveMenu.click();
        await this.page.waitForTimeout(2000);
    }

    async clickApplyLeave() {
        await this.applyLeaveTab.click();
        await this.page.waitForTimeout(2000);
    }

    async selectLeaveType() {

        await this.leaveTypeDropdown.click();

        await this.page.waitForTimeout(1000);

        await this.personalLeaveOption.click();

        await this.page.waitForTimeout(1000);
    }

    async enterDate(input, date) {

        await input.click();

        await this.page.waitForTimeout(500);

        await input.press('Control+A');

        await input.press('Backspace');

        await this.page.waitForTimeout(500);

        await input.pressSequentially(date, {
            delay: 100
        });

        await this.page.waitForTimeout(1000);
    }

    async fillLeaveDetails(fromDate, toDate, comments) {

        await this.enterDate(
            this.fromDateInput,
            fromDate
        );

        
        await this.enterDate(
            this.toDateInput,
            toDate
        );

        
        await this.commentsInput.fill(comments);

        await this.page.waitForTimeout(1000);
    }

    async applyLeave() {

        await this.applyButton.click();

        await this.page.waitForTimeout(3000);
    }

    async goToMyLeave() {

        await this.myLeaveTab.click();

        await this.page.waitForTimeout(3000);
    }

    async getLeaveRow(comments) {

        return this.page
            .locator('.oxd-table-card')
            .filter({
                hasText: comments
            });
    }

    async cancelLeave(comments) {

        const leaveRow = await this.getLeaveRow(comments);

        const cancelButton = leaveRow.getByRole(
            'button',
            { name: 'Cancel' }
        );

        await cancelButton.click();

        await this.page.waitForTimeout(3000);
    }
}

module.exports = { LeavePage };