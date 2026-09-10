class AdminPage {

    constructor(page) {
        this.page = page;

        this.adminMenu = page.locator(
            'a[href="/web/index.php/admin/viewAdminModule"]'
        );

        this.usernameSearch = page.locator(
            "input.oxd-input"
        ).first();

        this.statusDropdown = page
            .locator('.oxd-input-group')
            .filter({ hasText: 'Status' })
            .locator('.oxd-select-text');

        this.searchButton = page.locator(
            "//button[normalize-space()='Search']"
        );

        this.editButton = (username) =>
            page.locator('.oxd-table-card')
                .filter({ hasText: username })
                .locator('i.oxd-icon.bi-pencil-fill');

        this.disabledOption = page.getByText(
            'Disabled',
            { exact: true }
        );

        this.saveButton = page.locator(
            "//button[normalize-space()='Save']"
        );

        this.userDropdown = page.locator(
            ".oxd-userdropdown-name"
        );

        this.logoutButton = page.locator(
            "//a[normalize-space()='Logout']"
        );
    }

    async goToAdmin() {
        await this.adminMenu.click();
        await this.page.waitForTimeout(2000);
    }

    async searchUser(username) {
        await this.usernameSearch.fill(username);
        await this.searchButton.click();
        await this.page.waitForTimeout(3000);
    }

    async editUser(username) {
        await this.editButton(username).click();
        await this.page.waitForTimeout(2000);
    }

    async changeStatus() {
        await this.statusDropdown.click();
        await this.page.waitForTimeout(1000);
        await this.disabledOption.click();
        await this.page.waitForTimeout(1000);
    }

    async saveChanges() {
        await this.saveButton.click();
        await this.page.waitForTimeout(3000);
    }

    async logout() {
        await this.userDropdown.click();
        await this.logoutButton.click();
    }
}

module.exports = { AdminPage };