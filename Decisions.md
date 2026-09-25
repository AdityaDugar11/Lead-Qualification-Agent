# Architectural Decisions

## 1. Vanilla HTML/JS over Frameworks (React/Vue/Angular)
**Decision**: Build the application using raw HTML5 and Vanilla JavaScript.
**Rationale**:
- **Simplicity & Performance**: The application has exactly one feature (a form) and one API connection. Introducing a framework would add unnecessary boilerplate, increase the bundle size, and complicate the build process without providing proportional benefits.
- **Zero Build Step**: The code can be run directly in the browser without Node.js, Webpack, or Vite, making it extremely easy to maintain and deploy.

## 2. Tailwind CSS via CDN over Custom CSS/SASS
**Decision**: Use Tailwind CSS included via CDN for styling.
**Rationale**:
- **Speed of Development**: Utility classes allow for rapid UI construction directly within the HTML, keeping the file structure flat (a single `index.html` file).
- **Consistency**: Tailwind provides a robust, pre-defined design system, ensuring professional aesthetics without writing custom CSS rules.
- **CDN Usage**: While not optimal for production load times in large apps, for a single-page form, the CDN provides immediate access to the styling framework without a build step.

## 3. Direct API Integration (No BFF - Backend For Frontend)
**Decision**: The frontend POSTs directly to the n8n webhook.
**Rationale**:
- Reduces infrastructural complexity. The frontend acts as a simple dumb terminal for the n8n workflow. Security is handled via the `x-api-key` header, which is expected to be managed appropriately given the context.
