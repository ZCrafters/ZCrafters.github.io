## 2025-05-23 - Interactive Elements Semantics
**Learning:** Interactive elements (like clickable logos) implemented as `<div>` tags with `onclick` handlers are inaccessible to keyboard users and screen readers.
**Action:** Always use `<button>` (for actions) or `<a>` (for navigation) tags. If styling requires a container, place the semantic element as the wrapper or the direct child if layout dictates, ensuring the click handler is on the semantic element.
