# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q4-leave-apply-cancel.spec.js >> Q4 - Apply Leave, Verify Pending Approval and Cancel Leave
- Location: tests\Q4-leave-apply-cancel.spec.js:8:1

# Error details

```
Test timeout of 120000ms exceeded.
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
              - paragraph [ref=f3e127]: tester 2.0
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
            - generic [ref=f3e167] [cursor=pointer]:
              - generic [ref=f3e168]: CAN - Vacation
              - generic [ref=f3e169]: 
          - generic [ref=f3e172]:
            - generic [ref=f3e173]:
              - generic [ref=f3e174]: Leave Balance
              - generic [ref=f3e175] [cursor=pointer]: 
            - paragraph [ref=f3e177]: 180.00 Day(s)
        - generic [ref=f3e179]:
          - generic [ref=f3e181]:
            - generic [ref=f3e182]: From Date*
            - generic [ref=f3e186]:
              - textbox "dd-mm-yyyy" [ref=f3e187]
              - generic [ref=f3e188] [cursor=pointer]: 
          - generic [ref=f3e190]:
            - generic [ref=f3e191]: To Date*
            - generic [ref=f3e195]:
              - textbox "dd-mm-yyyy" [ref=f3e196]
              - generic [ref=f3e197] [cursor=pointer]: 
        - generic [ref=f3e201]:
          - generic [ref=f3e202]: Comments
          - textbox [ref=f3e205]
        - separator [ref=f3e206]
        - generic [ref=f3e207]:
          - paragraph [ref=f3e208]: "* Required"
          - button "Apply" [ref=f3e209] [cursor=pointer]
    - generic [ref=f3e210]:
      - paragraph [ref=f3e211]: OrangeHRM OS 5.9
      - paragraph [ref=f3e212]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e213] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```