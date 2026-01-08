## 2025-05-24 - Semantic HTML for Interactive Logos
**Learning:** Using `div` with `onclick` for major interactions like logos (which often act as "Home" or "Back to Top" buttons) creates accessibility barriers. It forces screen reader users to guess the interaction and breaks keyboard navigation.
**Action:** Always use `<button>` or `<a>` for interactive elements. If styling requires resetting defaults (like border/bg), do so in CSS classes, but keep the semantic tag. Adding `aria-label` is crucial when the visual content (like an image) doesn't provide text context.
