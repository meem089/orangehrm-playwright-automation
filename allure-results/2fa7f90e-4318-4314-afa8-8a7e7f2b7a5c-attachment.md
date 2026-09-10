# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q3-admin-edit-user.spec.js >> Q3 - Search and edit user status
- Location: tests\Q3-admin-edit-user.spec.js:8:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-table-card').filter({ hasText: 'Admin' })
Expected: visible
Error: strict mode violation: locator('.oxd-table-card').filter({ hasText: 'Admin' }) resolved to 6 elements:
    1) <div data-v-f2168256="" class="oxd-table-card">…</div> aka locator('div').filter({ hasText: /^AdminAdmintest userEnabled$/ }).first()
    2) <div data-v-f2168256="" class="oxd-table-card">…</div> aka locator('div').filter({ hasText: /^DPAdminAdmintest userEnabled$/ }).first()
    3) <div data-v-f2168256="" class="oxd-table-card">…</div> aka locator('div').filter({ hasText: /^eXKtUKhAdminHzDpgqA uMYBeVPEnabled$/ }).first()
    4) <div data-v-f2168256="" class="oxd-table-card">…</div> aka locator('div').filter({ hasText: /^qa_admin_1789017781388_rpcnbbAdminNoemi AufderharEnabled$/ }).first()
    5) <div data-v-f2168256="" class="oxd-table-card">…</div> aka locator('div').filter({ hasText: /^testtestAdmintest userEnabled$/ }).first()
    6) <div data-v-f2168256="" class="oxd-table-card">…</div> aka locator('div').filter({ hasText: /^uBfHIGQAdmintVGRDfp iHyGncLEnabled$/ }).first()

Call log:
  - Expect "toBeVisible" locator('.oxd-table-card').filter({ hasText: 'Admin' }) with timeout 5000ms
  - waiting for locator('.oxd-table-card').filter({ hasText: 'Admin' })

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]: Admin
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
    - banner [ref=f2e25]:
      - generic [ref=f2e26]:
        - generic [ref=f2e27]:
          - text: 
          - generic [ref=f2e28]:
            - heading "Admin" [level=6] [ref=f2e29]
            - heading "/ User Management" [level=6] [ref=f2e30]
        - link [ref=f2e32]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e33] [cursor=pointer]
        - list [ref=f2e39]:
          - listitem [ref=f2e40]:
            - generic [ref=f2e41] [cursor=pointer]:
              - img "profile picture" [ref=f2e42]
              - paragraph [ref=f2e43]: test user
              - generic [ref=f2e44]: 
      - navigation "Topbar Menu" [ref=f2e46]:
        - list [ref=f2e47]:
          - listitem [ref=f2e48] [cursor=pointer]:
            - generic [ref=f2e49]:
              - text: User Management
              - generic [ref=f2e50]: 
          - listitem [ref=f2e51] [cursor=pointer]:
            - generic [ref=f2e52]:
              - text: Job
              - generic [ref=f2e53]: 
          - listitem [ref=f2e54] [cursor=pointer]:
            - generic [ref=f2e55]:
              - text: Organization
              - generic [ref=f2e56]: 
          - listitem [ref=f2e57] [cursor=pointer]:
            - generic [ref=f2e58]:
              - text: Qualifications
              - generic [ref=f2e59]: 
          - listitem [ref=f2e60] [cursor=pointer]:
            - link "Nationalities" [ref=f2e61]:
              - /url: "#"
          - listitem [ref=f2e62] [cursor=pointer]:
            - link "Corporate Branding" [ref=f2e63]:
              - /url: "#"
          - listitem [ref=f2e64] [cursor=pointer]:
            - generic [ref=f2e65]:
              - text: Configuration
              - generic [ref=f2e66]: 
          - button "" [ref=f2e68] [cursor=pointer]
  - generic [ref=f2e70]:
    - generic [ref=f2e72]:
      - generic [ref=f2e73]:
        - generic [ref=f2e74]:
          - heading "System Users" [level=5] [ref=f2e76]
          - button "" [ref=f2e79] [cursor=pointer]
        - separator [ref=f2e81]
        - generic [ref=f2e83]:
          - generic [ref=f2e85]:
            - generic [ref=f2e87]:
              - generic [ref=f2e88]: Username
              - textbox [ref=f2e91]
            - generic [ref=f2e93]:
              - generic [ref=f2e94]: User Role
              - generic [ref=f2e98] [cursor=pointer]:
                - generic [ref=f2e99]: "-- Select --"
                - generic [ref=f2e100]: 
            - generic [ref=f2e103]:
              - generic [ref=f2e104]: Employee Name
              - textbox "Type for hints..." [ref=f2e109]
            - generic [ref=f2e111]:
              - generic [ref=f2e112]: Status
              - generic [ref=f2e116] [cursor=pointer]:
                - generic [ref=f2e117]: "-- Select --"
                - generic [ref=f2e118]: 
          - separator [ref=f2e120]
          - generic [ref=f2e121]:
            - button "Reset" [ref=f2e122] [cursor=pointer]
            - button "Search" [active] [ref=f2e123] [cursor=pointer]
      - generic [ref=f2e124]:
        - button " Add" [ref=f2e126] [cursor=pointer]:
          - generic [ref=f2e127]: 
          - text: Add
        - generic [ref=f2e128]:
          - separator [ref=f2e129]
          - generic [ref=f2e130]: (12) Records Found
        - table [ref=f2e133]:
          - rowgroup [ref=f2e134]:
            - row [ref=f2e135]:
              - columnheader "" [ref=f2e136]:
                - generic [ref=f2e138] [cursor=pointer]:
                  - checkbox "" [ref=f2e139]
                  - generic [ref=f2e140]: 
              - columnheader "Username " [ref=f2e142]:
                - text: Username
                - generic [ref=f2e143]:
                  - generic [ref=f2e144] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f2e145]:
                - text: User Role
                - generic [ref=f2e146]:
                  - generic [ref=f2e147] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f2e148]:
                - text: Employee Name
                - generic [ref=f2e149]:
                  - generic [ref=f2e150] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f2e151]:
                - text: Status
                - generic [ref=f2e152]:
                  - generic [ref=f2e153] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f2e154]
          - rowgroup [ref=f2e155]:
            - row [ref=f2e157]:
              - cell "" [ref=f2e158]:
                - generic [ref=f2e162]:
                  - checkbox "" [ref=f2e163]
                  - generic [ref=f2e164]: 
              - cell "Admin" [ref=f2e166]
              - cell "Admin" [ref=f2e168]
              - cell "test user" [ref=f2e170]
              - cell "Enabled" [ref=f2e172]
              - cell [ref=f2e174]:
                - generic [ref=f2e175]:
                  - button "" [ref=f2e176] [cursor=pointer]
                  - button "" [ref=f2e178] [cursor=pointer]
            - row [ref=f2e181]:
              - cell "" [ref=f2e182]:
                - generic [ref=f2e185] [cursor=pointer]:
                  - checkbox "" [ref=f2e186]
                  - generic [ref=f2e187]: 
              - cell "bc045_julie_1i1fpzan" [ref=f2e189]
              - cell "ESS" [ref=f2e191]
              - cell "Julie Towne" [ref=f2e193]
              - cell "Enabled" [ref=f2e195]
              - cell [ref=f2e197]:
                - generic [ref=f2e198]:
                  - button "" [ref=f2e199] [cursor=pointer]
                  - button "" [ref=f2e201] [cursor=pointer]
            - row [ref=f2e204]:
              - cell "" [ref=f2e205]:
                - generic [ref=f2e208] [cursor=pointer]:
                  - checkbox "" [ref=f2e209]
                  - generic [ref=f2e210]: 
              - cell "bc045_noemi_wi8eija0" [ref=f2e212]
              - cell "ESS" [ref=f2e214]
              - cell "Noemi Aufderhar" [ref=f2e216]
              - cell "Enabled" [ref=f2e218]
              - cell [ref=f2e220]:
                - generic [ref=f2e221]:
                  - button "" [ref=f2e222] [cursor=pointer]
                  - button "" [ref=f2e224] [cursor=pointer]
            - row [ref=f2e227]:
              - cell "" [ref=f2e228]:
                - generic [ref=f2e231] [cursor=pointer]:
                  - checkbox "" [ref=f2e232]
                  - generic [ref=f2e233]: 
              - cell "bc045_yessenia_ehyy0ssb" [ref=f2e235]
              - cell "ESS" [ref=f2e237]
              - cell "Yessenia Lynch" [ref=f2e239]
              - cell "Enabled" [ref=f2e241]
              - cell [ref=f2e243]:
                - generic [ref=f2e244]:
                  - button "" [ref=f2e245] [cursor=pointer]
                  - button "" [ref=f2e247] [cursor=pointer]
            - row [ref=f2e250]:
              - cell "" [ref=f2e251]:
                - generic [ref=f2e254] [cursor=pointer]:
                  - checkbox "" [ref=f2e255]
                  - generic [ref=f2e256]: 
              - cell "DPAdmin" [ref=f2e258]
              - cell "Admin" [ref=f2e260]
              - cell "test user" [ref=f2e262]
              - cell "Enabled" [ref=f2e264]
              - cell [ref=f2e266]:
                - generic [ref=f2e267]:
                  - button "" [ref=f2e268] [cursor=pointer]
                  - button "" [ref=f2e270] [cursor=pointer]
            - row [ref=f2e273]:
              - cell "" [ref=f2e274]:
                - generic [ref=f2e277] [cursor=pointer]:
                  - checkbox "" [ref=f2e278]
                  - generic [ref=f2e279]: 
              - cell "eXKtUKh" [ref=f2e281]
              - cell "Admin" [ref=f2e283]
              - cell "HzDpgqA uMYBeVP" [ref=f2e285]
              - cell "Enabled" [ref=f2e287]
              - cell [ref=f2e289]:
                - generic [ref=f2e290]:
                  - button "" [ref=f2e291] [cursor=pointer]
                  - button "" [ref=f2e293] [cursor=pointer]
            - row [ref=f2e296]:
              - cell "" [ref=f2e297]:
                - generic [ref=f2e300] [cursor=pointer]:
                  - checkbox "" [ref=f2e301]
                  - generic [ref=f2e302]: 
              - cell "kiran.kumar" [ref=f2e304]
              - cell "ESS" [ref=f2e306]
              - cell "Kiran Kumar" [ref=f2e308]
              - cell "Enabled" [ref=f2e310]
              - cell [ref=f2e312]:
                - generic [ref=f2e313]:
                  - button "" [ref=f2e314] [cursor=pointer]
                  - button "" [ref=f2e316] [cursor=pointer]
            - row [ref=f2e319]:
              - cell "" [ref=f2e320]:
                - generic [ref=f2e323] [cursor=pointer]:
                  - checkbox "" [ref=f2e324]
                  - generic [ref=f2e325]: 
              - cell "naveen.kumar" [ref=f2e327]
              - cell "ESS" [ref=f2e329]
              - cell "Naveen Kumar" [ref=f2e331]
              - cell "Enabled" [ref=f2e333]
              - cell [ref=f2e335]:
                - generic [ref=f2e336]:
                  - button "" [ref=f2e337] [cursor=pointer]
                  - button "" [ref=f2e339] [cursor=pointer]
            - row [ref=f2e342]:
              - cell "" [ref=f2e343]:
                - generic [ref=f2e346] [cursor=pointer]:
                  - checkbox "" [ref=f2e347]
                  - generic [ref=f2e348]: 
              - cell "qa_admin_1789017781388_rpcnbb" [ref=f2e350]
              - cell "Admin" [ref=f2e352]
              - cell "Noemi Aufderhar" [ref=f2e354]
              - cell "Enabled" [ref=f2e356]
              - cell [ref=f2e358]:
                - generic [ref=f2e359]:
                  - button "" [ref=f2e360] [cursor=pointer]
                  - button "" [ref=f2e362] [cursor=pointer]
            - row [ref=f2e365]:
              - cell "" [ref=f2e366]:
                - generic [ref=f2e369] [cursor=pointer]:
                  - checkbox "" [ref=f2e370]
                  - generic [ref=f2e371]: 
              - cell "srini.Puri" [ref=f2e373]
              - cell "ESS" [ref=f2e375]
              - cell "Srini Puri" [ref=f2e377]
              - cell "Disabled" [ref=f2e379]
              - cell [ref=f2e381]:
                - generic [ref=f2e382]:
                  - button "" [ref=f2e383] [cursor=pointer]
                  - button "" [ref=f2e385] [cursor=pointer]
            - row [ref=f2e388]:
              - cell "" [ref=f2e389]:
                - generic [ref=f2e392] [cursor=pointer]:
                  - checkbox "" [ref=f2e393]
                  - generic [ref=f2e394]: 
              - cell "testtest" [ref=f2e396]
              - cell "Admin" [ref=f2e398]
              - cell "test user" [ref=f2e400]
              - cell "Enabled" [ref=f2e402]
              - cell [ref=f2e404]:
                - generic [ref=f2e405]:
                  - button "" [ref=f2e406] [cursor=pointer]
                  - button "" [ref=f2e408] [cursor=pointer]
            - row [ref=f2e411]:
              - cell "" [ref=f2e412]:
                - generic [ref=f2e415] [cursor=pointer]:
                  - checkbox "" [ref=f2e416]
                  - generic [ref=f2e417]: 
              - cell "uBfHIGQ" [ref=f2e419]
              - cell "Admin" [ref=f2e421]
              - cell "tVGRDfp iHyGncL" [ref=f2e423]
              - cell "Enabled" [ref=f2e425]
              - cell [ref=f2e427]:
                - generic [ref=f2e428]:
                  - button "" [ref=f2e429] [cursor=pointer]
                  - button "" [ref=f2e431] [cursor=pointer]
    - generic [ref=f2e434]:
      - paragraph [ref=f2e435]: OrangeHRM OS 5.9
      - paragraph [ref=f2e436]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e437] [cursor=pointer]:
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
  6  | test.setTimeout(60000);
  7  | 
  8  | test('Q3 - Search and edit user status', async ({ page }) => {
  9  | 
  10 |     const loginPage = new LoginPage(page);
  11 |     const adminPage = new AdminPage(page);
  12 | 
  13 |     const username = 'Admin';
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
> 38 |     await expect(userRow).toBeVisible();
     |                           ^ Error: expect(locator).toBeVisible() failed
  39 | 
  40 |     await adminPage.editUser(username);
  41 | 
  42 |     await adminPage.changeStatus();
  43 | 
  44 |     await adminPage.saveChanges();
  45 | 
  46 |     await page.reload();
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