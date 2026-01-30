## 2025-05-23 - Legacy Interactive Div Pattern
**Learning:** Found critical navigation elements (Logo) implemented as `div` with `onclick`, bypassing semantic HTML and accessibility trees.
**Action:** When refactoring, search for `onclick` on non-button elements and convert to semantic `<button>` or `<a>` tags with ARIA labels.
