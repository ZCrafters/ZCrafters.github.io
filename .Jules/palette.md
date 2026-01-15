## 2025-02-18 - [Semantic HTML for Interactive Elements]
**Learning:** Legacy interactive elements (like the Logo) were implemented as `div` tags with `onclick` handlers, bypassing native keyboard accessibility and screen reader support.
**Action:** Always check interactive elements for semantic tags (`<button>`, `<a>`) and refactor `div`s with `onclick` to semantic equivalents, ensuring to verify styles as `button` defaults may differ.
