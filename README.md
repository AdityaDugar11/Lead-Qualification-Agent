# Enterprise Lead Qualification Agent

A high-converting, single-page enterprise lead capture frontend. This application collects lead information (Name, Email, Message) and sends it securely to an n8n automation backend where an AI agent analyzes the intent, scores the lead based on urgency and budget, and logs the results to Airtable (or triggers a Slack alert).

## Features
- **Modern UI**: Built with Tailwind CSS, featuring an enterprise dark-mode aesthetic.
- **AI-Powered Backend**: Integrates with n8n and Groq (LLM) to automatically score and summarize incoming leads.
- **Secure**: Uses `x-api-key` header authentication and a Git-ignored configuration file to keep your webhook URLs and secrets safe.
- **Lightweight**: Pure HTML5 and Vanilla JavaScript. Zero build steps, zero bloated frameworks.

## Project Structure
```text
.
├── frontend/
│   ├── index.html          # Main HTML structure and Tailwind classes
│   ├── script.js           # Form handling and Fetch API logic
│   ├── styles.css          # Additional custom CSS overrides
│   ├── config.example.js   # Template for environment variables (tracked)
│   └── config.js           # Actual environment variables (ignored by Git)
├── n8n workflow/
│   └── Lead Qualification Agent.json  # The export of the n8n backend workflow
├── README.md               # Project documentation
└── .gitignore              # Ignores sensitive files
```

## Setup Instructions

### 1. Frontend Setup
Because this is a static site, no Node.js installation is required. However, you must configure your API keys.

1. Navigate to the `frontend/` directory.
2. Rename `config.example.js` to `config.js` (or just create a new `config.js` file if cloning from GitHub).
3. Open `config.js` and input your live n8n webhook URL and secret API key:
   ```javascript
   const CONFIG = {
       WEBHOOK_URL: 'https://your-n8n-instance.com/webhook/lead-incoming',
       API_KEY: 'your-secure-api-key'
   };
   ```
4. Open `frontend/index.html` in any web browser to view and test the application locally.

### 2. Backend (n8n) Setup
1. Open your n8n instance.
2. Import the workflow file located in `n8n workflow/Lead Qualification Agent.json`.
3. Configure your credentials in n8n:
   - **Header Auth**: Create a credential named `x-api-key` and set the value to match the key you put in `config.js`. Select this credential in the Webhook node.
   - **Groq API**: Add your Groq API key to power the LLM.
   - **Slack / Airtable**: Connect your accounts to enable notifications and database logging.
4. Open the Webhook node settings and ensure **Respond to CORS** is turned **ON**.
5. Activate the workflow! (Ensure your frontend `config.js` uses the `/webhook/` production URL, not the `/webhook-test/` URL).

## Deployment
This frontend can be hosted for free on any static hosting provider (Vercel, Netlify, GitHub Pages, Cloudflare Pages). Just deploy the `frontend/` folder.

**Important**: Ensure that you inject or create the `config.js` file in your production environment, as it is intentionally ignored by Git to protect your secrets.
