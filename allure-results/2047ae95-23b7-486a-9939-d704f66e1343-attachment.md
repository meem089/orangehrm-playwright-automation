# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q4-leave-apply-cancel.spec.js >> Q4 - Apply Leave, Verify Pending Approval and Cancel Leave
- Location: tests\Q4-leave-apply-cancel.spec.js:8:1

# Error details

```
TypeError: Cannot read properties of undefined (reading 'click')
```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - heading "Leave" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: manda user
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - link "Apply" [ref=f3e133]:
              - /url: "#"
          - listitem [ref=f3e134] [cursor=pointer]:
            - link "My Leave" [ref=f3e135]:
              - /url: "#"
          - listitem [ref=f3e136] [cursor=pointer]:
            - generic [ref=f3e137]:
              - text: Entitlements
              - generic [ref=f3e138]: 
          - listitem [ref=f3e139] [cursor=pointer]:
            - generic [ref=f3e140]:
              - text: Reports
              - generic [ref=f3e141]: 
          - listitem [ref=f3e142] [cursor=pointer]:
            - generic [ref=f3e143]:
              - text: Configure
              - generic [ref=f3e144]: 
          - listitem [ref=f3e145] [cursor=pointer]:
            - link "Leave List" [ref=f3e146]:
              - /url: "#"
          - listitem [ref=f3e147] [cursor=pointer]:
            - link "Assign Leave" [ref=f3e148]:
              - /url: "#"
          - button "" [ref=f3e150] [cursor=pointer]
  - generic [ref=f3e152]:
    - generic [ref=f3e155]:
      - heading "Apply Leave" [level=6] [ref=f3e156]
      - separator [ref=f3e157]
      - generic [ref=f3e158]:
        - generic [ref=f3e160]:
          - generic [ref=f3e162]:
            - generic [ref=f3e163]: Leave Type*
            - generic [ref=f3e166]:
              - generic [ref=f3e167] [cursor=pointer]:
                - generic [active] [ref=f3e168]: "-- Select --"
                - generic [ref=f3e169]: 
              - listbox [ref=f3e171]:
                - option "-- Select --" [ref=f3e172] [cursor=pointer]
                - option "CAN - Personal" [ref=f3e173] [cursor=pointer]
                - option "US - Bereavement" [ref=f3e175] [cursor=pointer]
          - generic [ref=f3e178]:
            - generic [ref=f3e179]: Leave Balance
            - paragraph [ref=f3e182]: 0.00 Day(s)
        - generic [ref=f3e184]:
          - generic [ref=f3e186]:
            - generic [ref=f3e187]: From Date*
            - generic [ref=f3e191]:
              - textbox "yyyy-dd-mm" [ref=f3e192]
              - generic [ref=f3e193] [cursor=pointer]: 
          - generic [ref=f3e195]:
            - generic [ref=f3e196]: To Date*
            - generic [ref=f3e200]:
              - textbox "yyyy-dd-mm" [ref=f3e201]
              - generic [ref=f3e202] [cursor=pointer]: 
        - generic [ref=f3e206]:
          - generic [ref=f3e207]: Comments
          - textbox [ref=f3e210]
        - separator [ref=f3e211]
        - generic [ref=f3e212]:
          - paragraph [ref=f3e213]: "* Required"
          - button "Apply" [ref=f3e214] [cursor=pointer]
    - generic [ref=f3e215]:
      - paragraph [ref=f3e216]: OrangeHRM OS 5.9
      - paragraph [ref=f3e217]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e218] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1   | class LeavePage {
  2   | 
  3   |     constructor(page) {
  4   |         this.page = page;
  5   | 
  6   |         this.leaveMenu = page.locator(
  7   |             'a[href="/web/index.php/leave/viewLeaveModule"]'
  8   |         );
  9   | 
  10  |         this.applyLeaveTab = page.locator(
  11  |             "//a[normalize-space()='Apply']"
  12  |         );
  13  | 
  14  |         this.leaveTypeDropdown = page
  15  |             .locator('.oxd-input-group')
  16  |             .filter({ hasText: 'Leave Type' })
  17  |             .locator('.oxd-select-text');
  18  | 
  19  |        this.bereavementLeaveOption = page.getByText(
  20  |     'US - Bereavement',
  21  |     { exact: true }
  22  | );
  23  | 
  24  |         this.fromDateInput = page.locator(
  25  |             "input[placeholder='yyyy-dd-mm']"
  26  |         ).first();
  27  | 
  28  |         this.toDateInput = page.locator(
  29  |             "input[placeholder='yyyy-dd-mm']"
  30  |         ).nth(1);
  31  | 
  32  |         this.commentsInput = page.locator(
  33  |             "textarea.oxd-textarea"
  34  |         );
  35  | 
  36  |         this.applyButton = page.locator(
  37  |             "//button[normalize-space()='Apply']"
  38  |         );
  39  | 
  40  |         this.myLeaveTab = page.locator(
  41  |             "//a[normalize-space()='My Leave']"
  42  |         );
  43  |     }
  44  | 
  45  |     async goToLeave() {
  46  |         await this.leaveMenu.click();
  47  |         await this.page.waitForTimeout(2000);
  48  |     }
  49  | 
  50  |     async clickApplyLeave() {
  51  |         await this.applyLeaveTab.click();
  52  |         await this.page.waitForTimeout(2000);
  53  |     }
  54  | 
  55  |     async selectLeaveType() {
  56  | 
  57  |         await this.leaveTypeDropdown.click();
  58  | 
  59  |         await this.page.waitForTimeout(1000);
  60  | 
> 61  |         await this.personalLeaveOption.click();
      |                                        ^ TypeError: Cannot read properties of undefined (reading 'click')
  62  | 
  63  |         await this.page.waitForTimeout(1000);
  64  |     }
  65  | 
  66  |     async enterDate(input, date) {
  67  | 
  68  |         await input.click();
  69  | 
  70  |         await this.page.waitForTimeout(500);
  71  | 
  72  |         await input.press('Control+A');
  73  | 
  74  |         await input.press('Backspace');
  75  | 
  76  |         await this.page.waitForTimeout(500);
  77  | 
  78  |         await input.pressSequentially(date, {
  79  |             delay: 100
  80  |         });
  81  | 
  82  |         await this.page.waitForTimeout(1000);
  83  |     }
  84  | 
  85  |     async fillLeaveDetails(fromDate, toDate, comments) {
  86  | 
  87  |         await this.enterDate(
  88  |             this.fromDateInput,
  89  |             fromDate
  90  |         );
  91  | 
  92  |         
  93  |         await this.enterDate(
  94  |             this.toDateInput,
  95  |             toDate
  96  |         );
  97  | 
  98  |         
  99  |         await this.commentsInput.fill(comments);
  100 | 
  101 |         await this.page.waitForTimeout(1000);
  102 |     }
  103 | 
  104 |     async applyLeave() {
  105 | 
  106 |         await this.applyButton.click();
  107 | 
  108 |         await this.page.waitForTimeout(3000);
  109 |     }
  110 | 
  111 |     async goToMyLeave() {
  112 | 
  113 |         await this.myLeaveTab.click();
  114 | 
  115 |         await this.page.waitForTimeout(3000);
  116 |     }
  117 | 
  118 |     async getLeaveRow(comments) {
  119 | 
  120 |         return this.page
  121 |             .locator('.oxd-table-card')
  122 |             .filter({
  123 |                 hasText: comments
  124 |             });
  125 |     }
  126 | 
  127 |     async cancelLeave(comments) {
  128 | 
  129 |         const leaveRow = await this.getLeaveRow(comments);
  130 | 
  131 |         const cancelButton = leaveRow.getByRole(
  132 |             'button',
  133 |             { name: 'Cancel' }
  134 |         );
  135 | 
  136 |         await cancelButton.click();
  137 | 
  138 |         await this.page.waitForTimeout(3000);
  139 |     }
  140 | }
  141 | 
  142 | module.exports = { LeavePage };
```