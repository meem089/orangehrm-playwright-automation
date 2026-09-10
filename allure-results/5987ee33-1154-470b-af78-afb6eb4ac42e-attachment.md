# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q4-leave-apply-cancel.spec.js >> Q4 - Apply Leave, Verify Pending Approval and Cancel Leave
- Location: tests\Q4-leave-apply-cancel.spec.js:8:1

# Error details

```
Error: locator.press: Target page, context or browser has been closed
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
  56  |         await this.leaveTypeDropdown.click();
  57  |         await this.page.waitForTimeout(1000);
  58  |         await this.bereavementLeaveOption.click();
  59  |         await this.page.waitForTimeout(1000);
  60  |     }
  61  | 
  62  |     async enterDate(input, date) {
  63  |         await input.click();
  64  |         await input.press('Control+A');
  65  |         await input.press('Backspace');
  66  |         await input.pressSequentially(date, {
  67  |             delay: 100
  68  |         });
> 69  |         await input.press('Tab');
      |                     ^ Error: locator.press: Target page, context or browser has been closed
  70  |         await this.page.waitForTimeout(1000);
  71  |     }
  72  | 
  73  |     async fillLeaveDetails(fromDate, toDate, comments) {
  74  |         await this.enterDate(
  75  |             this.fromDateInput,
  76  |             fromDate
  77  |         );
  78  | 
  79  |         await this.enterDate(
  80  |             this.toDateInput,
  81  |             toDate
  82  |         );
  83  | 
  84  |         await this.commentsInput.fill(comments);
  85  |     }
  86  | 
  87  |     async applyLeave() {
  88  |         await this.applyButton.click();
  89  |         await this.page.waitForTimeout(3000);
  90  |     }
  91  | 
  92  |     async goToMyLeave() {
  93  |         await this.myLeaveTab.click();
  94  |         await this.page.waitForTimeout(3000);
  95  |     }
  96  | 
  97  |     async getLeaveRow(fromDate, toDate) {
  98  |         const dateText = `${fromDate} to ${toDate}`;
  99  | 
  100 |         return this.page
  101 |             .locator('.oxd-table-card')
  102 |             .filter({
  103 |                 hasText: dateText
  104 |             })
  105 |             .filter({
  106 |                 hasText: 'Pending Approval'
  107 |             })
  108 |             .first();
  109 |     }
  110 | 
  111 |     async cancelLeave(fromDate, toDate) {
  112 |         const leaveRow = await this.getLeaveRow(
  113 |             fromDate,
  114 |             toDate
  115 |         );
  116 | 
  117 |         await leaveRow
  118 |             .getByRole('button', { name: 'Cancel' })
  119 |             .click();
  120 | 
  121 |         await this.page.waitForTimeout(3000);
  122 |     }
  123 | }
  124 | 
  125 | module.exports = { LeavePage };
```