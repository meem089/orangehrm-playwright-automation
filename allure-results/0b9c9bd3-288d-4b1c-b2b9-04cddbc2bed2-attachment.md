# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q3-admin-edit-user.spec.js >> Q3 - Search and edit user status
- Location: tests\Q3-admin-edit-user.spec.js:8:1

# Error details

```
Error: page.reload: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - waiting for navigation until "load"

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "Admin" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: TfyUOrxyYf user
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: User Management
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - generic [ref=f4e136]:
              - text: Job
              - generic [ref=f4e137]: 
          - listitem [ref=f4e138] [cursor=pointer]:
            - generic [ref=f4e139]:
              - text: Organization
              - generic [ref=f4e140]: 
          - listitem [ref=f4e141] [cursor=pointer]:
            - generic [ref=f4e142]:
              - text: Qualifications
              - generic [ref=f4e143]: 
          - listitem [ref=f4e144] [cursor=pointer]:
            - link "Nationalities" [ref=f4e145]:
              - /url: "#"
          - listitem [ref=f4e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=f4e147]:
              - /url: "#"
          - listitem [ref=f4e148] [cursor=pointer]:
            - generic [ref=f4e149]:
              - text: Configuration
              - generic [ref=f4e150]: 
          - button "" [ref=f4e152] [cursor=pointer]
  - generic [ref=f4e154]:
    - generic [ref=f4e157]:
      - heading "Edit User" [level=6] [ref=f4e158]
      - separator [ref=f4e159]
      - generic [ref=f4e160]:
        - generic [ref=f4e165]:
          - generic [ref=f4e167]:
            - generic [ref=f4e168]: User Role*
            - generic [ref=f4e172] [cursor=pointer]:
              - generic [ref=f4e173]: "-- Select --"
              - generic [ref=f4e174]: 
          - generic [ref=f4e177]:
            - generic [ref=f4e178]: Employee Name*
            - textbox "Type for hints..." [ref=f4e183]
          - generic [ref=f4e185]:
            - generic [ref=f4e186]: Status*
            - generic [ref=f4e190] [cursor=pointer]:
              - generic [ref=f4e191]: "-- Select --"
              - generic [ref=f4e192]: 
          - generic [ref=f4e195]:
            - generic [ref=f4e196]: Username*
            - textbox [ref=f4e199]
          - generic [ref=f4e201]:
            - generic [ref=f4e202]: Change Password ?
            - generic [ref=f4e206] [cursor=pointer]:
              - checkbox " Yes" [ref=f4e207]
              - generic [ref=f4e208]: 
              - text: "Yes"
        - separator [ref=f4e210]
        - generic [ref=f4e211]:
          - paragraph [ref=f4e212]: "* Required"
          - button "Cancel" [ref=f4e213] [cursor=pointer]
          - button "Save" [ref=f4e214] [cursor=pointer]
    - generic [ref=f4e215]:
      - paragraph [ref=f4e216]: OrangeHRM OS 5.9
      - paragraph [ref=f4e217]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e218] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | const { LoginPage } = require('../pages/LoginPage');
  4  | const { AdminPage } = require('../pages/AdminPage');
  5  | 
  6  | test.setTimeout(100000);
  7  | 
  8  | test('Q3 - Search and edit user status', async ({ page }) => {
  9  | 
  10 |     const loginPage = new LoginPage(page);
  11 |     const adminPage = new AdminPage(page);
  12 | 
  13 |    const username ='Amank';
  14 | 
  15 |     await page.goto(
  16 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  17 |     );
  18 | 
  19 |     await page.waitForTimeout(2000);
  20 | 
  21 |     await loginPage.login(
  22 |         'Admin',
  23 |         'admin123'
  24 |     );
  25 | 
  26 |     await page.waitForTimeout(2000);
  27 | 
  28 |     await adminPage.goToAdmin();
  29 | 
  30 |     await adminPage.searchUser(username);
  31 | 
  32 |     let userRow = page
  33 |         .locator('.oxd-table-card')
  34 |         .filter({
  35 |             hasText: username
  36 |         });
  37 | 
  38 |     await expect(userRow).toBeVisible();
  39 | 
  40 |     await adminPage.editUser(username);
  41 | 
  42 |     await adminPage.changeStatus();
  43 | 
  44 |     await adminPage.saveChanges();
  45 | 
> 46 |     await page.reload();
     |                ^ Error: page.reload: net::ERR_ABORTED; maybe frame was detached?
  47 | 
  48 |     await page.waitForTimeout(3000);
  49 | 
  50 |     await adminPage.searchUser(username);
  51 | 
  52 |     userRow = page
  53 |         .locator('.oxd-table-card')
  54 |         .filter({
  55 |             hasText: username
  56 |         });
  57 | 
  58 |     await expect(userRow).toBeVisible();
  59 | 
  60 |     await expect(userRow).toContainText('Disabled');
  61 | 
  62 |     await adminPage.logout();
  63 | 
  64 |     await expect(page).toHaveURL(
  65 |         /auth\/login/
  66 |     );
  67 | });
```