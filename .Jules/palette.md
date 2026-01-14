## 2026-01-14 - Interactive Divs as Navigation
**Learning:** Using `div` tags with `onclick` handlers for primary navigation (like "Back to Top" logos) creates a significant barrier for keyboard users as they are not focusable by default.
**Action:** Always refactor such elements to semantic `<button>` or `<a>` tags. In Tailwind, this is usually safe visually as preflight resets button styles, but verify `display` properties (e.g., ensure `flex` classes are preserved).
