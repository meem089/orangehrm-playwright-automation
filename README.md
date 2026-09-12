# OrangeHRM Playwright Automation

## Project Overview

This project is an automated testing suite for the OrangeHRM web application using Playwright.

The project covers:

* UI automation testing for OrangeHRM
* Login, PIM, Admin and Leave module testing
* Page Object Model (POM)
* Manual test cases and bug reporting
* API automation using Postman and Newman
* HTML and Allure test reports
* GitHub Actions workflow

## Application Under Test

**OrangeHRM Demo:**

https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

## Tech Stack

* **Playwright** - UI automation
* **JavaScript** - Programming language
* **Node.js** - Runtime environment
* **Postman** - API testing
* **Newman** - API collection execution
* **Allure** - Test reporting
* **GitHub Actions** - CI workflow
* **Git & GitHub** - Version control

## Project Structure

```text
orangehrm-playwright-automation/
│
├── .github/
│   └── workflows/
│
├── api/
│   ├── Part-D-API-Automation.postman_collection(step-4).json
│   └── newman-report.json
│
├── allure-report/
├── allure-results/
│
├── manual-tests/
│   └── Manual Test Cases, Traceability and Bug Report
│
├── pages/
│   ├── LoginPage.js
│   ├── PIMPage.js
│   ├── AdminPage.js
│   └── LeavePage.js
│
├── tests/
│   ├── Q1-invalid-login.spec.js
│   ├── Q2-add-search-employee.spec.js
│   ├── Q3-admin-edit-user.spec.js
│   └── Q4-leave-apply-cancel.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

Check Node.js version:

```bash
node --version
```

Check npm version:

```bash
npm --version
```

## Installation

Clone the repository:

```bash
git clone https://github.com/meem089/orangehrm-playwright-automation.git
```

Go to the project folder:

```bash
cd orangehrm-playwright-automation
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Run UI Tests Individually

### Q1 - Invalid Login

```bash
npx playwright test tests/Q1-invalid-login.spec.js
```

### Q2 - Add and Search Employee

```bash
npx playwright test tests/Q2-add-search-employee.spec.js
```

### Q3 - Admin Edit User

```bash
npx playwright test tests/Q3-admin-edit-user.spec.js
```

### Q4 - Leave Apply and Cancel

```bash
npx playwright test tests/Q4-leave-apply-cancel.spec.js
```

## Run All UI Tests Together

To execute the complete Q1-Q4 UI automation suite:

```bash
npx playwright test
```

This runs all UI automation scenarios together.

## Run API Automation

The API collection is available inside the `api` folder.

Run the Postman collection using Newman:

```bash
npx newman run "api/Part-D-API-Automation.postman_collection(step-4).json"
```

The API automation covers the JSONPlaceholder Users API.

## Run UI and API Tests Together

Run the UI test suite first:

```bash
npx playwright test
```

Then execute the API collection:

```bash
npx newman run "api/Part-D-API-Automation.postman_collection(step-4).json"
```

This executes the UI and API automation sequentially.

## Test Reports

### HTML Report

After running Playwright tests, open the HTML report:

```bash
npx playwright show-report
```

If the default port is already in use:

```bash
npx playwright show-report --port 9324
```

### Allure Report

Allure results are generated after Playwright test execution.

Generate the Allure report:

```bash
npx allure generate allure-results --clean -o allure-report
```

Open the Allure report:

```bash
npx allure open allure-report
```

### Newman API Report

The Newman execution report is available in:

```text
api/newman-report.json
```

## Manual Testing

Manual testing documentation is available in the `manual-tests` folder.

It contains:

* Manual test cases
* Test execution results
* Traceability mapping
* Bug report

The manual testing scope covers:

* Login
* PIM
* Admin
* Leave

## API Testing

API automation is performed using the JSONPlaceholder Users API:

```text
https://jsonplaceholder.typicode.com/users
```

The API tests cover:

* GET all users
* GET single user
* PUT update user
* Status code validation
* User ID validation
* Response data validation
* Phone validation

## Reporting

The project uses the following reporting tools:

* Playwright HTML Report
* Allure Report
* Newman API Execution Report

## GitHub Workflow

The project was developed incrementally with meaningful commits for different parts of the assignment, including:

* UI automation
* Page Object Model
* Q1-Q4 test scenarios
* API automation
* Newman execution
* Manual testing
* Test reports
* Documentation

## Test Coverage

### UI Automation

| Scenario                     | Module | Status |
| ---------------------------- | ------ | ------ |
| Q1 - Invalid Login           | Login  | Passed |
| Q2 - Add and Search Employee | PIM    | Passed |
| Q3 - Admin Edit User         | Admin  | Passed |
| Q4 - Leave Apply and Cancel  | Leave  | Passed |

### API Automation

| Request         | Method | Status |
| --------------- | ------ | ------ |
| Get All Users   | GET    | Passed |
| Get Single User | GET    | Passed |
| Update User     | PUT    | Passed |

## Author

**Sanzida Akter Meem**

GitHub:

https://github.com/meem089

LinkedIn:

https://linkedin.com/in/sanzida-akter-meem-697884331
