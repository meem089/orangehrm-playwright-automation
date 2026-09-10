# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Q3-admin-edit-user.spec.js >> Q3 - Search and edit user status
- Location: tests\Q3-admin-edit-user.spec.js:8:1

# Error details

```
Test timeout of 60000ms exceeded.
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
              - textbox "Search" [active] [ref=f4e15]: DPAdmin
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list
    - banner [ref=f4e19]:
      - generic [ref=f4e20]:
        - generic [ref=f4e21]:
          - text: 
          - heading "Admin" [level=6] [ref=f4e23]
        - link [ref=f4e25]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e26] [cursor=pointer]
        - list [ref=f4e32]:
          - listitem [ref=f4e33]:
            - generic [ref=f4e34] [cursor=pointer]:
              - img "profile picture" [ref=f4e35]
              - paragraph [ref=f4e36]: Surya king
              - generic [ref=f4e37]: 
      - navigation "Topbar Menu" [ref=f4e39]:
        - list [ref=f4e40]:
          - listitem [ref=f4e41] [cursor=pointer]:
            - generic [ref=f4e42]:
              - text: User Management
              - generic [ref=f4e43]: 
          - listitem [ref=f4e44] [cursor=pointer]:
            - generic [ref=f4e45]:
              - text: Job
              - generic [ref=f4e46]: 
          - listitem [ref=f4e47] [cursor=pointer]:
            - generic [ref=f4e48]:
              - text: Organization
              - generic [ref=f4e49]: 
          - listitem [ref=f4e50] [cursor=pointer]:
            - generic [ref=f4e51]:
              - text: Qualifications
              - generic [ref=f4e52]: 
          - listitem [ref=f4e53] [cursor=pointer]:
            - link "Nationalities" [ref=f4e54]:
              - /url: "#"
          - listitem [ref=f4e55] [cursor=pointer]:
            - link "Corporate Branding" [ref=f4e56]:
              - /url: "#"
          - listitem [ref=f4e57] [cursor=pointer]:
            - generic [ref=f4e58]:
              - text: Configuration
              - generic [ref=f4e59]: 
          - button "" [ref=f4e61] [cursor=pointer]
  - generic [ref=f4e63]:
    - generic [ref=f4e66]:
      - heading "Edit User" [level=6] [ref=f4e67]
      - separator [ref=f4e68]
      - generic [ref=f4e69]:
        - generic [ref=f4e71]:
          - generic [ref=f4e73]:
            - generic [ref=f4e74]: User Role*
            - generic [ref=f4e78] [cursor=pointer]:
              - generic [ref=f4e79]: Admin
              - generic [ref=f4e80]: 
          - generic [ref=f4e83]:
            - generic [ref=f4e84]: Employee Name*
            - textbox "Type for hints..." [ref=f4e89]: Surya N king
          - generic [ref=f4e91]:
            - generic [ref=f4e92]: Status*
            - generic [ref=f4e96] [cursor=pointer]:
              - generic [ref=f4e97]: Disabled
              - generic [ref=f4e98]: 
          - generic [ref=f4e101]:
            - generic [ref=f4e102]: Username*
            - textbox [ref=f4e105]: DPAdmin
          - generic [ref=f4e107]:
            - generic [ref=f4e108]: Change Password ?
            - generic [ref=f4e112] [cursor=pointer]:
              - checkbox " Yes" [ref=f4e113]
              - generic [ref=f4e114]: 
              - text: "Yes"
        - separator [ref=f4e116]
        - generic [ref=f4e117]:
          - paragraph [ref=f4e118]: "* Required"
          - button "Cancel" [ref=f4e119] [cursor=pointer]
          - button "Save" [ref=f4e120] [cursor=pointer]
    - generic [ref=f4e121]:
      - paragraph [ref=f4e122]: OrangeHRM OS 5.9
      - paragraph [ref=f4e123]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e124] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```