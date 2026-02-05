## 2026-02-05 - Interactive Divs vs Semantic Buttons
**Learning:** Legacy interactive elements are frequently implemented as `div` tags with `onclick` handlers, which are inaccessible to keyboard users and screen readers.
**Action:** Refactor these to semantic `<button>` or `<a>` tags, retaining existing classes for visual fidelity, and ensure `type="button"` is set to prevent form submission behavior.
