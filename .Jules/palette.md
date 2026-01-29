## 2026-01-29 - Semantic Branding Elements
**Learning:** Interactive branding elements (like logos functioning as "back to top" buttons) are often implemented as `div`s with `onclick`, making them inaccessible to keyboard and screen reader users.
**Action:** Always wrap interactive logos in semantic `<button type="button">` or `<a>` tags with appropriate `aria-label`s, ensuring they are discoverable and usable by all.
