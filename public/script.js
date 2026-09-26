document.getElementById('leadForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const loadingIcon = document.getElementById('loadingIcon');
    const statusMessage = document.getElementById('statusMessage');

    const data = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    submitBtn.disabled = true;
    btnText.textContent = 'Processing...';
    loadingIcon.classList.remove('hidden');
    
    statusMessage.classList.add('hidden');
    statusMessage.classList.remove('bg-green-100', 'text-green-900', 'border-green-900', 'bg-red-100', 'text-red-900', 'border-red-900');

    // Call our own Vercel Serverless API, which protects the real n8n webhook and API keys!
    const webhookUrl = '/api/submit';

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            statusMessage.textContent = 'Thank you! We received your message.';
            statusMessage.classList.add('bg-green-100', 'text-green-900', 'border-green-900');
            statusMessage.classList.remove('hidden');
            form.reset();
        } else {
            throw new Error(`Server returned ${response.status}`);
        }
    } catch (error) {
        console.error('Lead submission failed:', error);
        
        statusMessage.textContent = 'An error occurred. Please try again.';
        statusMessage.classList.add('bg-red-100', 'text-red-900', 'border-red-900');
        statusMessage.classList.remove('hidden');
    } finally {
        submitBtn.disabled = false;
        btnText.textContent = 'Submit Request';
        loadingIcon.classList.add('hidden');
    }
});