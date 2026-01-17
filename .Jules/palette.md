## 2024-05-23 - Semantic HTML & Accessibility in Static Sites
**Learning:** Even in simple static sites, using semantic elements (button vs div) for interactive elements is critical for keyboard accessibility and screen readers. Relying solely on `onclick` and `cursor-pointer` on `div`s excludes keyboard users.
**Action:** Always verify interactive elements are `button` or `a` tags, or have proper `role`, `tabindex`, and key event handlers if they must be custom elements. Also, always secure `target="_blank"` links with `rel="noopener noreferrer"`.
