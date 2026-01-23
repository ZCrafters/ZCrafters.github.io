## 2025-02-18 - Semantic Logo Buttons
**Learning:** Interactive logos implemented as `div` tags with `onclick` handlers are inaccessible to keyboard and screen reader users.
**Action:** Always wrap logos in `<a>` (if linking to home) or `<button>` (if scrolling to top) tags with appropriate `aria-label` and `type="button"`. Ensure default button styles (border, bg) are reset.
