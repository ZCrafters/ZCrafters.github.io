## 2026-01-20 - Semantic Button Refactoring
**Learning:** `div` with `onclick` is a common anti-pattern in legacy code that completely blocks keyboard users. Refactoring to `<button>` often requires resetting default user-agent styles (border, background, padding) to avoid visual regression.
**Action:** Always apply `bg-transparent border-none p-0 text-left` when converting interactive divs to buttons to maintain visual fidelity while gaining accessibility.
