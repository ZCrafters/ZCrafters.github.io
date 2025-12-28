## 2024-05-23 - [Interactive DIVs Anti-pattern]
**Learning:** Found critical accessibility issue with `div` tags using `onclick` for main navigation. These are invisible to keyboard users and screen readers.
**Action:** Audit all `onclick` handlers. If navigating, refactor to `<a>`. If triggering action, refactor to `<button>`.
