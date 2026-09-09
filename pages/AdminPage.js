class AdminPage {

    constructor(page) {
        this.page = page;
        this.adminMenu = page.locator('a[href="/web/index.php/admin/viewAdminModule"]');
        this.usernameSearch = page.locator( "input.oxd-input" ).first();
       this.employeeNameSearch = page.locator( "input[placeholder='Type for hints...']" ).first();

        this.statusDropdown = page.locator('.oxd-input-group').filter({ hasText: 'Status' }).locator('.oxd-select-text');

        this.searchButton = page.locator(
            "//button[normalize-space()='Search']"
        );
        this.resultUsername = page.locator(
            "//div[@class='oxd-table-card']//div[2]//div[1]"
        );

        this.editButton = (username) =>
    page.getByRole('row')
        .filter({
            has: page.getByRole('cell', { name: username })
        })
        .locator('i.oxd-icon.bi-pencil-fill');

       this.disabledOption = page.getByText('Disabled', { exact: true });

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
    }

    async searchUser(username) {
        await this.usernameSearch.fill(username);
        await this.searchButton.click();
    }

    async editUser(username) {
    await this.editButton(username).click();
}

    async changeStatus() {

    await this.statusDropdown.click();
    await this.disabledOption.click();
}

    async saveChanges() {
        await this.saveButton.click();
    }

    async logout() {
        await this.userDropdown.click();
        await this.logoutButton.click();
    }
}

module.exports = { AdminPage };