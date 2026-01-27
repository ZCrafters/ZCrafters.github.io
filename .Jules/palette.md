# Palette's Journal

This journal documents critical UX and accessibility learnings.

## 2025-02-18 - Semantic Logo Navigation
**Learning:** Converting a `div`-based logo click handler to a semantic `<button>` significantly improves keyboard navigability without altering the visual design when using utility classes like `bg-transparent border-none p-0`.
**Action:** Always wrap interactive logos in `<button>` (for actions) or `<a>` (for links) tags, even if they contain images.
