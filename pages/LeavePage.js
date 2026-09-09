class LeavePage {

    constructor(page) {
        this.page = page;

        // Leave menu
        this.leaveMenu = page.locator(
            'a[href="/web/index.php/leave/viewLeaveModule"]'
        );

        // Apply tab
        this.applyLeaveTab = page.locator(
            "//a[normalize-space()='Apply']"
        );

        // Leave Type dropdown
        this.leaveTypeDropdown = page.locator(
            "//div[@class='oxd-select-text-input']"
        );

        // CAN - Personal option
        this.personalLeaveOption = page.locator(
            "//div[contains(@class,'oxd-select-dropdown')]//div[normalize-space()='CAN - Personal']"
        );

        // From Date
        this.fromDateInput = page.locator(
            "input[placeholder='yyyy-dd-mm']"
        ).first();

        // To Date
        this.toDateInput = page.locator(
            "input[placeholder='yyyy-dd-mm']"
        ).nth(1);

        // Comments
        this.commentsInput = page.locator(
            "textarea.oxd-textarea"
        );

        // Apply button
        this.applyButton = page.locator(
            "//button[normalize-space()='Apply']"
        );

        // My Leave
        this.myLeaveTab = page.locator(
            "//a[normalize-space()='My Leave']"
        );

        // Pending Approval
        this.pendingApprovalStatus = page.locator(
            "//div[contains(text(),'Pending Approval')]"
        );

        // Cancel
        this.cancelButton = page.locator(
            "//button[normalize-space()='Cancel']"
        );

        // Cancelled
        this.cancelledStatus = page.locator(
            "//div[contains(text(),'Cancelled')]"
        );
    }

    async goToLeave() {
        await this.leaveMenu.click();
    }

    async clickApplyLeave() {
        await this.applyLeaveTab.click();
    }
}

module.exports = { LeavePage };