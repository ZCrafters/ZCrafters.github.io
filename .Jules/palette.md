## 2026-02-01 - [Semantic HTML for Interactive Elements]
**Learning:** Using `div` with `onclick` creates inaccessible interactive elements that are invisible to screen readers and keyboard users.
**Action:** Always use `<button type="button">` or `<a>` for interactive elements, ensuring they are focusable and have appropriate ARIA labels if they lack text content.
