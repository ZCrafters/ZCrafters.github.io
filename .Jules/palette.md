## 2025-05-22 - Interactive Elements as Divs
**Learning:** Found critical pattern of using `div` with `onclick` handlers for core interactivity (Logo navigation), which breaks keyboard accessibility and screen reader support.
**Action:** Always refactor legacy `div` triggers to semantic `<button>` or `<a>` tags with appropriate styling resets (e.g., `bg-transparent border-none p-0`) to maintain visual design while ensuring accessibility.
