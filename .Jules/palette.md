## 2024-05-23 - Accessibility First Steps
**Learning:** This project relies heavily on `div` elements with `onclick` handlers for interactivity, which breaks keyboard accessibility and screen reader support. Icon-only buttons (like menu toggles) are missing `aria-label`s, making them invisible to screen readers.
**Action:** When working on similar static sites, always check for `div` vs `<button>`/`<a>` usage for interactive elements and ensure all icon-only buttons have descriptive labels.
