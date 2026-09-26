export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Access Vercel Environment Variables
    const webhookUrl = process.env.WEBHOOK_URL;
    const apiKey = process.env.API_KEY;

    if (!webhookUrl || !apiKey) {
        return res.status(500).json({ error: 'Server misconfiguration: Missing environment variables' });
    }

    try {
        // Relay the data to the secure n8n webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
            body: JSON.stringify(req.body)
        });

        if (response.ok) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(response.status).json({ error: 'Failed to submit lead to n8n' });
        }
    } catch (error) {
        console.error('API Route Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
