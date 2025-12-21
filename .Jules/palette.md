## 2025-12-21 - Icon-Only Buttons Accessibility
**Learning:** Icon-only buttons (like menu toggles and close icons) are invisible to screen readers without explicit labels. This is a common pattern in this codebase's mobile layouts.
**Action:** Always verify `aria-label` presence on buttons containing only icons (e.g., `<i data-lucide="...">`).

## 2025-12-21 - External Link Security
**Learning:** External links (`target="_blank"`) were missing `rel="noopener noreferrer"`, which is a security risk.
**Action:** Automatically add this attribute when reviewing or adding external links.
