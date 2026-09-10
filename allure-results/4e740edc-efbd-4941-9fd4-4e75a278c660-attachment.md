# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q1-invalid-login.spec.js >> Q1-Invalid username and password
- Location: tests\Q1-invalid-login.spec.js:3:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.oxd-alert-content-text')
Expected: "Invalid credentials"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('.oxd-alert-content-text') with timeout 5000ms
  - waiting for locator('.oxd-alert-content-text')
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

# Test source

```ts
  1 | const {test,expect}=require('@playwright/test');
  2 | const{LoginPage}=require('../pages/LoginPage');
  3 | test('Q1-Invalid username and password',async ({page}) =>{
  4 |     const loginPage=new LoginPage(page);
  5 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  6 | await loginPage.login('meem123', 'meem123');
> 7 | await expect(loginPage.errorMessage).toHaveText('Invalid credentials');
    |                                      ^ Error: expect(locator).toHaveText(expected) failed
  8 | 
  9 | });
```