## 2026-02-02 - Semantic Refactoring of Legacy Elements
**Learning:** Legacy interactive elements (like the logo) were implemented as divs with onclick handlers. Converting them to semantic buttons requires resetting user-agent styles (bg-transparent, border-none, p-0) to maintain visual fidelity.
**Action:** Always verify visual regressions when swapping tags, as user-agent stylesheets differ.
