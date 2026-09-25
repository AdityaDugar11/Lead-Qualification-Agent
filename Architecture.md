# Architecture

## Overview
This project follows a simple, decoupled client-server architecture where a static frontend interacts directly with a third-party workflow automation backend.

## Client (Frontend)
- **Type**: Single-Page Static HTML Application.
- **Responsibility**: Rendering the user interface, handling user input, managing local interaction states (loading, success, error), and communicating with the backend API.
- **Hosting**: Can be hosted on any static file server or CDN (e.g., Vercel, Netlify, GitHub Pages).

## Server (Backend)
- **Type**: n8n Webhook Endpoint.
- **Responsibility**: Receiving lead data, validating the API key, storing data, and triggering subsequent automation workflows (e.g., CRM integration, email notifications).

## Data Flow
1. The static frontend collects data.
2. JavaScript intercepts the form submission and constructs a JSON payload.
3. The frontend initiates an asynchronous `fetch` request to the n8n webhook URL, including the required `x-api-key` header.
4. The n8n backend processes the payload and returns an HTTP status code (200 for success, 4xx/5xx for errors).
5. The frontend reads the response and updates the UI accordingly.
