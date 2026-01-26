## 2026-01-26 - Semantic HTML & Honest UI
**Learning:** Using generic `<div>` tags for interactive elements (like the Logo) requires manual remediation for keyboard support and screen readers, which is often missed. Additionally, styling non-interactive elements (like the "Selected Works" cards) with `cursor-pointer` creates a "dishonest UI" that sets false expectations for users.
**Action:** Always start with semantic `<button>` or `<a>` tags for interactions. Reserve `cursor-pointer` exclusively for elements that trigger an action.
