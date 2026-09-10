# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q3-admin-edit-user.spec.js >> Q3 - Search and edit user role/status
- Location: tests\Q3-admin-edit-user.spec.js:7:1

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//i[@class=\'oxd-icon bi-pencil-fill\']') resolved to 19 elements:
    1) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka getByRole('button').filter({ hasText: /^$/ }).nth(4)
    2) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(2) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    3) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(3) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    4) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(4) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    5) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(5) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    6) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(6) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    7) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(7) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    8) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(8) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    9) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(9) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    10) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(10) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    ...

Call log:
  - waiting for locator('//i[@class=\'oxd-icon bi-pencil-fill\']')

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
              - textbox "Search" [ref=f2e15]: Kumar123
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list
    - banner [ref=f2e19]:
      - generic [ref=f2e20]:
        - generic [ref=f2e21]:
          - text: 
          - generic [ref=f2e22]:
            - heading "Admin" [level=6] [ref=f2e23]
            - heading "/ User Management" [level=6] [ref=f2e24]
        - link [ref=f2e26]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e27] [cursor=pointer]
        - list [ref=f2e33]:
          - listitem [ref=f2e34]:
            - generic [ref=f2e35] [cursor=pointer]:
              - img "profile picture" [ref=f2e36]
              - paragraph [ref=f2e37]: Stan Murazik
              - generic [ref=f2e38]: 
      - navigation "Topbar Menu" [ref=f2e40]:
        - list [ref=f2e41]:
          - listitem [ref=f2e42] [cursor=pointer]:
            - generic [ref=f2e43]:
              - text: User Management
              - generic [ref=f2e44]: 
          - listitem [ref=f2e45] [cursor=pointer]:
            - generic [ref=f2e46]:
              - text: Job
              - generic [ref=f2e47]: 
          - listitem [ref=f2e48] [cursor=pointer]:
            - generic [ref=f2e49]:
              - text: Organization
              - generic [ref=f2e50]: 
          - listitem [ref=f2e51] [cursor=pointer]:
            - generic [ref=f2e52]:
              - text: Qualifications
              - generic [ref=f2e53]: 
          - listitem [ref=f2e54] [cursor=pointer]:
            - link "Nationalities" [ref=f2e55]:
              - /url: "#"
          - listitem [ref=f2e56] [cursor=pointer]:
            - link "Corporate Branding" [ref=f2e57]:
              - /url: "#"
          - listitem [ref=f2e58] [cursor=pointer]:
            - generic [ref=f2e59]:
              - text: Configuration
              - generic [ref=f2e60]: 
          - button "" [ref=f2e62] [cursor=pointer]
  - generic [ref=f2e64]:
    - generic [ref=f2e66]:
      - generic [ref=f2e67]:
        - generic [ref=f2e68]:
          - heading "System Users" [level=5] [ref=f2e70]
          - button "" [ref=f2e73] [cursor=pointer]
        - separator [ref=f2e75]
        - generic [ref=f2e77]:
          - generic [ref=f2e79]:
            - generic [ref=f2e81]:
              - generic [ref=f2e82]: Username
              - textbox [ref=f2e85]
            - generic [ref=f2e87]:
              - generic [ref=f2e88]: User Role
              - generic [ref=f2e92] [cursor=pointer]:
                - generic [ref=f2e93]: "-- Select --"
                - generic [ref=f2e94]: 
            - generic [ref=f2e97]:
              - generic [ref=f2e98]: Employee Name
              - textbox "Type for hints..." [ref=f2e103]
            - generic [ref=f2e105]:
              - generic [ref=f2e106]: Status
              - generic [ref=f2e110] [cursor=pointer]:
                - generic [ref=f2e111]: "-- Select --"
                - generic [ref=f2e112]: 
          - separator [ref=f2e114]
          - generic [ref=f2e115]:
            - button "Reset" [ref=f2e116] [cursor=pointer]
            - button "Search" [active] [ref=f2e117] [cursor=pointer]
      - generic [ref=f2e118]:
        - button " Add" [ref=f2e120] [cursor=pointer]:
          - generic [ref=f2e121]: 
          - text: Add
        - generic [ref=f2e122]:
          - separator [ref=f2e123]
          - generic [ref=f2e124]: (19) Records Found
        - table [ref=f2e127]:
          - rowgroup [ref=f2e128]:
            - row [ref=f2e129]:
              - columnheader "" [ref=f2e130]:
                - generic [ref=f2e132] [cursor=pointer]:
                  - checkbox "" [ref=f2e133]
                  - generic [ref=f2e134]: 
              - columnheader "Username " [ref=f2e136]:
                - text: Username
                - generic [ref=f2e137]:
                  - generic [ref=f2e138] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f2e139]:
                - text: User Role
                - generic [ref=f2e140]:
                  - generic [ref=f2e141] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f2e142]:
                - text: Employee Name
                - generic [ref=f2e143]:
                  - generic [ref=f2e144] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f2e145]:
                - text: Status
                - generic [ref=f2e146]:
                  - generic [ref=f2e147] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f2e148]
          - rowgroup [ref=f2e149]:
            - row [ref=f2e151]:
              - cell "" [ref=f2e152]:
                - generic [ref=f2e155] [cursor=pointer]:
                  - checkbox "" [ref=f2e156]
                  - generic [ref=f2e157]: 
              - cell "Abhi480.1633264884424" [ref=f2e159]
              - cell "ESS" [ref=f2e161]
              - cell "Sam A" [ref=f2e163]
              - cell "Enabled" [ref=f2e165]
              - cell [ref=f2e167]:
                - generic [ref=f2e168]:
                  - button "" [ref=f2e169] [cursor=pointer]
                  - button "" [ref=f2e171] [cursor=pointer]
            - row [ref=f2e174]:
              - cell "" [ref=f2e175]:
                - generic [ref=f2e178] [cursor=pointer]:
                  - checkbox "" [ref=f2e179]
                  - generic [ref=f2e180]: 
              - cell "Abhi521.9745783885646" [ref=f2e182]
              - cell "ESS" [ref=f2e184]
              - cell "Sam A" [ref=f2e186]
              - cell "Enabled" [ref=f2e188]
              - cell [ref=f2e190]:
                - generic [ref=f2e191]:
                  - button "" [ref=f2e192] [cursor=pointer]
                  - button "" [ref=f2e194] [cursor=pointer]
            - row [ref=f2e197]:
              - cell "" [ref=f2e198]:
                - generic [ref=f2e201] [cursor=pointer]:
                  - checkbox "" [ref=f2e202]
                  - generic [ref=f2e203]: 
              - cell "Abhi593.6220729321468" [ref=f2e205]
              - cell "Admin" [ref=f2e207]
              - cell "Sam A" [ref=f2e209]
              - cell "Enabled" [ref=f2e211]
              - cell [ref=f2e213]:
                - generic [ref=f2e214]:
                  - button "" [ref=f2e215] [cursor=pointer]
                  - button "" [ref=f2e217] [cursor=pointer]
            - row [ref=f2e220]:
              - cell "" [ref=f2e221]:
                - generic [ref=f2e224] [cursor=pointer]:
                  - checkbox "" [ref=f2e225]
                  - generic [ref=f2e226]: 
              - cell "Abhi627.5015089510345" [ref=f2e228]
              - cell "ESS" [ref=f2e230]
              - cell "Sam A" [ref=f2e232]
              - cell "Enabled" [ref=f2e234]
              - cell [ref=f2e236]:
                - generic [ref=f2e237]:
                  - button "" [ref=f2e238] [cursor=pointer]
                  - button "" [ref=f2e240] [cursor=pointer]
            - row [ref=f2e243]:
              - cell "" [ref=f2e244]:
                - generic [ref=f2e247] [cursor=pointer]:
                  - checkbox "" [ref=f2e248]
                  - generic [ref=f2e249]: 
              - cell "Abhi828.1689194987779" [ref=f2e251]
              - cell "ESS" [ref=f2e253]
              - cell "Sam A" [ref=f2e255]
              - cell "Enabled" [ref=f2e257]
              - cell [ref=f2e259]:
                - generic [ref=f2e260]:
                  - button "" [ref=f2e261] [cursor=pointer]
                  - button "" [ref=f2e263] [cursor=pointer]
            - row [ref=f2e266]:
              - cell "" [ref=f2e267]:
                - generic [ref=f2e270] [cursor=pointer]:
                  - checkbox "" [ref=f2e271]
                  - generic [ref=f2e272]: 
              - cell "Abhi844.123021203642" [ref=f2e274]
              - cell "Admin" [ref=f2e276]
              - cell "Sam A" [ref=f2e278]
              - cell "Enabled" [ref=f2e280]
              - cell [ref=f2e282]:
                - generic [ref=f2e283]:
                  - button "" [ref=f2e284] [cursor=pointer]
                  - button "" [ref=f2e286] [cursor=pointer]
            - row [ref=f2e289]:
              - cell "" [ref=f2e290]:
                - generic [ref=f2e293] [cursor=pointer]:
                  - checkbox "" [ref=f2e294]
                  - generic [ref=f2e295]: 
              - cell "Abhi857.0581780440143" [ref=f2e297]
              - cell "Admin" [ref=f2e299]
              - cell "Sam A" [ref=f2e301]
              - cell "Enabled" [ref=f2e303]
              - cell [ref=f2e305]:
                - generic [ref=f2e306]:
                  - button "" [ref=f2e307] [cursor=pointer]
                  - button "" [ref=f2e309] [cursor=pointer]
            - row [ref=f2e312]:
              - cell "" [ref=f2e313]:
                - generic [ref=f2e316] [cursor=pointer]:
                  - checkbox "" [ref=f2e317]
                  - generic [ref=f2e318]: 
              - cell "Abhi939.0311201249663" [ref=f2e320]
              - cell "ESS" [ref=f2e322]
              - cell "Sam A" [ref=f2e324]
              - cell "Enabled" [ref=f2e326]
              - cell [ref=f2e328]:
                - generic [ref=f2e329]:
                  - button "" [ref=f2e330] [cursor=pointer]
                  - button "" [ref=f2e332] [cursor=pointer]
            - row [ref=f2e335]:
              - cell "" [ref=f2e336]:
                - generic [ref=f2e340]:
                  - checkbox "" [ref=f2e341]
                  - generic [ref=f2e342]: 
              - cell "Admin" [ref=f2e344]
              - cell "Admin" [ref=f2e346]
              - cell "Stan Murazik" [ref=f2e348]
              - cell "Enabled" [ref=f2e350]
              - cell [ref=f2e352]:
                - generic [ref=f2e353]:
                  - button "" [ref=f2e354] [cursor=pointer]
                  - button "" [ref=f2e356] [cursor=pointer]
            - row [ref=f2e359]:
              - cell "" [ref=f2e360]:
                - generic [ref=f2e363] [cursor=pointer]:
                  - checkbox "" [ref=f2e364]
                  - generic [ref=f2e365]: 
              - cell "jdoe_ess_gw074591gpf4" [ref=f2e367]
              - cell "ESS" [ref=f2e369]
              - cell "Taylor Primarymain52363zefp" [ref=f2e371]
              - cell "Enabled" [ref=f2e373]
              - cell [ref=f2e375]:
                - generic [ref=f2e376]:
                  - button "" [ref=f2e377] [cursor=pointer]
                  - button "" [ref=f2e379] [cursor=pointer]
            - row [ref=f2e382]:
              - cell "" [ref=f2e383]:
                - generic [ref=f2e386] [cursor=pointer]:
                  - checkbox "" [ref=f2e387]
                  - generic [ref=f2e388]: 
              - cell "jdoe_ess_main91415k16o" [ref=f2e390]
              - cell "ESS" [ref=f2e392]
              - cell "Taylor Primarygw037426cb9k" [ref=f2e394]
              - cell "Enabled" [ref=f2e396]
              - cell [ref=f2e398]:
                - generic [ref=f2e399]:
                  - button "" [ref=f2e400] [cursor=pointer]
                  - button "" [ref=f2e402] [cursor=pointer]
            - row [ref=f2e405]:
              - cell "" [ref=f2e406]:
                - generic [ref=f2e409] [cursor=pointer]:
                  - checkbox "" [ref=f2e410]
                  - generic [ref=f2e411]: 
              - cell "Kumar123" [ref=f2e413]
              - cell "ESS" [ref=f2e415]
              - cell "Kumar L123" [ref=f2e417]
              - cell "Enabled" [ref=f2e419]
              - cell [ref=f2e421]:
                - generic [ref=f2e422]:
                  - button "" [ref=f2e423] [cursor=pointer]
                  - button "" [ref=f2e425] [cursor=pointer]
            - row [ref=f2e428]:
              - cell "" [ref=f2e429]:
                - generic [ref=f2e432] [cursor=pointer]:
                  - checkbox "" [ref=f2e433]
                  - generic [ref=f2e434]: 
              - cell "Last069130" [ref=f2e436]
              - cell "ESS" [ref=f2e438]
              - cell "First069130 Last069130" [ref=f2e440]
              - cell "Enabled" [ref=f2e442]
              - cell [ref=f2e444]:
                - generic [ref=f2e445]:
                  - button "" [ref=f2e446] [cursor=pointer]
                  - button "" [ref=f2e448] [cursor=pointer]
            - row [ref=f2e451]:
              - cell "" [ref=f2e452]:
                - generic [ref=f2e455] [cursor=pointer]:
                  - checkbox "" [ref=f2e456]
                  - generic [ref=f2e457]: 
              - cell "leave_employee_1788952898526" [ref=f2e459]
              - cell "ESS" [ref=f2e461]
              - cell "Leave_17889528511 Employee_17889528511" [ref=f2e463]
              - cell "Enabled" [ref=f2e465]
              - cell [ref=f2e467]:
                - generic [ref=f2e468]:
                  - button "" [ref=f2e469] [cursor=pointer]
                  - button "" [ref=f2e471] [cursor=pointer]
            - row [ref=f2e474]:
              - cell "" [ref=f2e475]:
                - generic [ref=f2e478] [cursor=pointer]:
                  - checkbox "" [ref=f2e479]
                  - generic [ref=f2e480]: 
              - cell "leave_employee_1788953145555" [ref=f2e482]
              - cell "ESS" [ref=f2e484]
              - cell "Leave_17889530867 Employee_17889530867" [ref=f2e486]
              - cell "Enabled" [ref=f2e488]
              - cell [ref=f2e490]:
                - generic [ref=f2e491]:
                  - button "" [ref=f2e492] [cursor=pointer]
                  - button "" [ref=f2e494] [cursor=pointer]
            - row [ref=f2e497]:
              - cell "" [ref=f2e498]:
                - generic [ref=f2e501] [cursor=pointer]:
                  - checkbox "" [ref=f2e502]
                  - generic [ref=f2e503]: 
              - cell "Mohan" [ref=f2e505]
              - cell "ESS" [ref=f2e507]
              - cell "First 1788952238721 sai" [ref=f2e509]
              - cell "Disabled" [ref=f2e511]
              - cell [ref=f2e513]:
                - generic [ref=f2e514]:
                  - button "" [ref=f2e515] [cursor=pointer]
                  - button "" [ref=f2e517] [cursor=pointer]
            - row [ref=f2e520]:
              - cell "" [ref=f2e521]:
                - generic [ref=f2e524] [cursor=pointer]:
                  - checkbox "" [ref=f2e525]
                  - generic [ref=f2e526]: 
              - cell "Mohan1788952795191" [ref=f2e528]
              - cell "ESS" [ref=f2e530]
              - cell "First 1788952795191 sai" [ref=f2e532]
              - cell "Disabled" [ref=f2e534]
              - cell [ref=f2e536]:
                - generic [ref=f2e537]:
                  - button "" [ref=f2e538] [cursor=pointer]
                  - button "" [ref=f2e540] [cursor=pointer]
            - row [ref=f2e543]:
              - cell "" [ref=f2e544]:
                - generic [ref=f2e547] [cursor=pointer]:
                  - checkbox "" [ref=f2e548]
                  - generic [ref=f2e549]: 
              - cell "Paramesh12345" [ref=f2e551]
              - cell "ESS" [ref=f2e553]
              - cell "test 666" [ref=f2e555]
              - cell "Disabled" [ref=f2e557]
              - cell [ref=f2e559]:
                - generic [ref=f2e560]:
                  - button "" [ref=f2e561] [cursor=pointer]
                  - button "" [ref=f2e563] [cursor=pointer]
            - row [ref=f2e566]:
              - cell "" [ref=f2e567]:
                - generic [ref=f2e570] [cursor=pointer]:
                  - checkbox "" [ref=f2e571]
                  - generic [ref=f2e572]: 
              - cell "test_user_1788952011637" [ref=f2e574]
              - cell "ESS" [ref=f2e576]
              - cell "Stan Murazik" [ref=f2e578]
              - cell "Enabled" [ref=f2e580]
              - cell [ref=f2e582]:
                - generic [ref=f2e583]:
                  - button "" [ref=f2e584] [cursor=pointer]
                  - button "" [ref=f2e586] [cursor=pointer]
    - generic [ref=f2e589]:
      - paragraph [ref=f2e590]: OrangeHRM OS 5.9
      - paragraph [ref=f2e591]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e592] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | class AdminPage {
  2  | 
  3  |     constructor(page) {
  4  |         this.page = page;
  5  |         this.adminMenu = page.locator('a[href="/web/index.php/admin/viewAdminModule"]');
  6  |         this.usernameSearch = page.locator( "input.oxd-input" ).first();
  7  | 
  8  |         this.userRoleDropdown = page.locator('.oxd-input-group').filter({ hasText: 'User Role' }).locator('.oxd-select-text');
  9  | 
  10 |         this.employeeNameSearch = page.locator( "input[placeholder='Type for hints...']" ).first();
  11 | 
  12 |         this.statusDropdown = page.locator('.oxd-input-group').filter({ hasText: 'Status' }).locator('.oxd-select-text');
  13 | 
  14 |         this.searchButton = page.locator(
  15 |             "//button[normalize-space()='Search']"
  16 |         );
  17 |         this.resultUsername = page.locator(
  18 |             "//div[@class='oxd-table-card']//div[2]//div[1]"
  19 |         );
  20 | 
  21 |         this.editButton = page.locator(
  22 |             "//i[@class='oxd-icon bi-pencil-fill']"
  23 |         );
  24 | 
  25 |         this.adminOption = page.locator(
  26 |             "//div[contains(text(),'Admin')]"
  27 |         );
  28 | 
  29 |         this.disabledOption = page.locator(
  30 |             "//div[contains(text(),'Disabled')]"
  31 |         );
  32 | 
  33 |         this.saveButton = page.locator(
  34 |             "//button[normalize-space()='Save']"
  35 |         );
  36 | 
  37 |         this.userDropdown = page.locator(
  38 |             ".oxd-userdropdown-name"
  39 |         );
  40 | 
  41 |         this.logoutButton = page.locator(
  42 |             "//a[normalize-space()='Logout']"
  43 |         );
  44 |     }
  45 | 
  46 |     async goToAdmin() {
  47 |         await this.adminMenu.click();
  48 |     }
  49 | 
  50 |     async searchUser(username) {
  51 |         await this.usernameSearch.fill(username);
  52 |         await this.searchButton.click();
  53 |     }
  54 | 
  55 |     async editUser() {
> 56 |         await this.editButton.click();
     |                               ^ Error: locator.click: Error: strict mode violation: locator('//i[@class=\'oxd-icon bi-pencil-fill\']') resolved to 19 elements:
  57 |     }
  58 | 
  59 |     async changeRoleAndStatus() {
  60 | 
  61 |         await this.userRoleDropdown.click();
  62 |         await this.adminOption.click();
  63 | 
  64 |         await this.statusDropdown.click();
  65 |         await this.disabledOption.click();
  66 |     }
  67 | 
  68 |     async saveChanges() {
  69 |         await this.saveButton.click();
  70 |     }
  71 | 
  72 |     async logout() {
  73 |         await this.userDropdown.click();
  74 |         await this.logoutButton.click();
  75 |     }
  76 | }
  77 | 
  78 | module.exports = { AdminPage };
```