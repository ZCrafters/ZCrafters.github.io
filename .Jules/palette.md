## 2024-05-23 - Accessibility of Interactive Elements
**Learning:** Icon-only buttons and non-semantic interactive elements (like `div` with `onclick`) are significant barriers for screen reader users and keyboard navigation.
**Action:** Always ensure interactive elements use semantic HTML (`<button>`, `<a>`) or have appropriate ARIA roles and tab indices. For icon-only buttons, `aria-label` is mandatory to provide an accessible name.

## 2024-05-23 - Branding vs Functionality in Accessible Names
**Learning:** When adding `aria-label` to brand elements (like a logo), ensure the label doesn't just describe the action ("Scroll to top") but also identifies the brand ("CakraLabs").
**Action:** Use composite labels like "Brand Name - Action" when the element serves both identity and functional purposes.