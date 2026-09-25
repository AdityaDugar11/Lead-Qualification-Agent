# Product Requirements Document (PRD)

## Overview
This project is a high-converting, single-page enterprise lead capture frontend. It is designed to capture potential lead information (Name, Email, Message) and send it directly to an external backend (n8n webhook) for further processing.

## Core Features
- **Lead Capture Form**: A user-friendly form with fields for Name, Email, and Message.
- **Client-Side Validation**: Basic HTML5 validation to ensure required fields are filled out.
- **Direct API Integration**: Submits form data directly to a live n8n webhook endpoint via HTTP POST.
- **State Management**: Displays loading states (button disabled) during submission, and clear success or error feedback messages based on the API response.

## User Flow
1. User navigates to the landing page.
2. User fills out the Name, Email, and Message fields.
3. User clicks the "Submit" button.
4. The application transitions to a loading state.
5. The application sends a JSON payload to the configured n8n webhook.
6. The application displays a success message on HTTP 200 OK, or an error message on failure, and resets the form on success.

## Webhook Integration Requirements
- **Endpoint**: Configurable n8n webhook URL.
- **Method**: POST
- **Headers**: 
  - `Content-Type: application/json`
  - `x-api-key: YOUR_LIVE_API_KEY`
- **Payload Format**: JSON object containing `name`, `email`, and `message`.
