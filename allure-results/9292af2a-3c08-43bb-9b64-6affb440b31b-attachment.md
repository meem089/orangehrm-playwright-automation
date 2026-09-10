# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q4-leave-apply-cancel.spec.js >> Q4 - Apply Leave, Verify Pending Approval and Cancel Leave
- Location: tests\Q4-leave-apply-cancel.spec.js:8:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.oxd-input-group').filter({ hasText: 'Leave Type' }).locator('.oxd-select-text')

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
  19  |         this.bereavementLeaveOption = page.getByText(
  20  |             'US - Bereavement',
  21  |             { exact: true }
  22  |         );
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
> 56  |         await this.leaveTypeDropdown.click();
      |                                      ^ Error: locator.click: Target page, context or browser has been closed
  57  | 
  58  |         await this.page.waitForTimeout(1000);
  59  | 
  60  |         await this.bereavementLeaveOption.click();
  61  | 
  62  |         await this.page.waitForTimeout(1000);
  63  |     }
  64  | 
  65  |     async enterDate(input, date) {
  66  |         await input.click();
  67  | 
  68  |         await this.page.waitForTimeout(500);
  69  | 
  70  |         await input.press('Control+A');
  71  | 
  72  |         await input.press('Backspace');
  73  | 
  74  |         await this.page.waitForTimeout(500);
  75  | 
  76  |         await input.pressSequentially(date, {
  77  |             delay: 100
  78  |         });
  79  | 
  80  |         await this.page.waitForTimeout(1000);
  81  |     }
  82  | 
  83  |     async fillLeaveDetails(fromDate, toDate, comments) {
  84  |         await this.enterDate(
  85  |             this.fromDateInput,
  86  |             fromDate
  87  |         );
  88  | 
  89  |         await this.enterDate(
  90  |             this.toDateInput,
  91  |             toDate
  92  |         );
  93  | 
  94  |         await this.commentsInput.fill(comments);
  95  | 
  96  |         await this.page.waitForTimeout(1000);
  97  |     }
  98  | 
  99  |     async applyLeave() {
  100 |         await this.applyButton.click();
  101 | 
  102 |         await this.page.waitForTimeout(3000);
  103 |     }
  104 | 
  105 |     async goToMyLeave() {
  106 |         await this.myLeaveTab.click();
  107 | 
  108 |         await this.page.waitForTimeout(3000);
  109 |     }
  110 | 
  111 |     async getLeaveRow(fromDate, toDate) {
  112 |         const dateText = `${fromDate} to ${toDate}`;
  113 | 
  114 |         return this.page
  115 |             .locator('.oxd-table-card')
  116 |             .filter({
  117 |                 hasText: dateText
  118 |             })
  119 |             .filter({
  120 |                 hasText: 'Pending Approval'
  121 |             })
  122 |             .first();
  123 |     }
  124 | 
  125 |     async cancelLeave(fromDate, toDate) {
  126 |         const leaveRow = await this.getLeaveRow(
  127 |             fromDate,
  128 |             toDate
  129 |         );
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