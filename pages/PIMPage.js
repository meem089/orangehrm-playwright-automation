class PIMPage {

    constructor(page) {
        this.page = page;

        // PIM Menu
        this.pimMenu = page.locator(
            'a[href="/web/index.php/pim/viewPimModule"]'
        );

        // Add Employee Button
        this.addButton = page.locator(
            "//button[normalize-space()='Add']"
        );

        // Employee Information
        this.firstNameInput = page.locator(
            "input[placeholder='First Name']"
        );

        this.middleNameInput = page.locator(
            "input[placeholder='Middle Name']"
        );

        this.lastNameInput = page.locator(
            "input[placeholder='Last Name']"
        );

        // Employee ID - Add Employee
        this.employeeIdInput = page.locator(
            "//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']"
        );

        // Save Button
        this.saveButton = page.locator(
            "button[type='submit']"
        );

        // Employee List
        this.employeeListLink = page.locator(
            "//a[normalize-space()='Employee List']"
        );

        // Employee Name Search
        // There are two "Type for hints..." inputs.
        // First one is Employee Name.
        this.employeeNameSearch = page.locator(
            "input[placeholder='Type for hints...']"
        ).first();

        // Employee ID Search
        this.employeeIdSearch = page.locator(
            "//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']"
        );

        // Search Button
        this.searchButton = page.locator(
            "//button[normalize-space()='Search']"
        );

        // Employee Result Name
        this.employeeResultName = page.locator(
            "//div[@role='row']//div[1]"
        );

        // Employee Result ID
        this.employeeResultId = page.locator(
            "//div[@role='row']//div[2]"
        );

        // User Dropdown
        this.userDropdown = page.locator(
            ".oxd-userdropdown-name"
        );

        // Logout
        this.logoutButton = page.locator(
            "//a[normalize-space()='Logout']"
        );
    }

    async goToPIM() {
        await this.pimMenu.click();
    }

    async clickAddEmployee() {
        await this.addButton.click();
    }

    async addEmployee(firstName, middleName, lastName, employeeId) {
        await this.firstNameInput.fill(firstName);
        await this.middleNameInput.fill(middleName);
        await this.lastNameInput.fill(lastName);
        await this.employeeIdInput.fill(employeeId);

        await this.saveButton.click();
    }

    async goToEmployeeList() {
        await this.employeeListLink.click();
    }

    async searchEmployee(employeeName, employeeId) {
        await this.employeeNameSearch.fill(employeeName);

        await this.employeeIdSearch.fill(employeeId);

        await this.searchButton.click();
    }

    async logout() {
        await this.userDropdown.click();
        await this.logoutButton.click();
    }
}

module.exports = { PIMPage };