# Design Strategy

## Aesthetic
- **Theme**: Enterprise Dark Mode. This provides a sleek, modern, and professional appearance suitable for B2B or high-end lead capture.
- **Color Palette**: 
  - Backgrounds: Deep grays/blacks (e.g., `bg-gray-900`, `bg-gray-800`).
  - Text: High contrast whites and light grays (`text-white`, `text-gray-300`).
  - Accents/Brand: A prominent, trustworthy primary color for actions (e.g., an Indigo or Blue hue like `bg-indigo-600`).

## UI Components
- **Layout**: Centered card layout to focus user attention entirely on the form.
- **Inputs**:
  - Distinct background colors to separate them from the main card background (`bg-gray-700`).
  - Clear placeholder text.
- **Buttons**:
  - Full width for prominence.
  - Distinct hover states to encourage interaction.
  - Disabled state styling (opacity, cursor) during loading.

## UX Interactions
- **Focus States**: Inputs must have clear focus rings (e.g., `focus:ring-indigo-500`) to improve accessibility and guide the user.
- **Feedback**: Immediate visual feedback for success (green styling) and errors (red styling) placed prominently near the submit button.

## Responsiveness
- The form card must adapt to mobile devices (full width with padding) and constrain to a readable maximum width on larger screens (`max-w-md` or `max-w-lg`).
