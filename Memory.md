# Memory and State Management

## Overview
Given the lightweight nature of this application, there is no need for a complex state management library (like Redux or Vuex). State is handled entirely through local DOM manipulation and closure variables in Vanilla JavaScript.

## Handled States
- **Idle**: Form is ready for input. No messages displayed.
- **Loading**:
  - The submit button is disabled to prevent duplicate submissions.
  - Button text is changed to indicate processing (e.g., "Submitting...").
- **Success**:
  - A success message is injected into the DOM.
  - The form fields are cleared using `HTMLFormElement.reset()`.
- **Error**:
  - An error message (with corresponding error styles) is injected into the DOM.
  - The form fields retain their data to allow the user to correct or retry the submission.
  - Failed request statuses or network errors are logged to the browser console for debugging purposes.
