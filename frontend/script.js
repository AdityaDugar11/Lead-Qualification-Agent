document.getElementById('leadForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const loadingIcon = document.getElementById('loadingIcon');
    const statusMessage = document.getElementById('statusMessage');

    // FIX 1: Hardcode the JSON structure. 
    // You MUST check your index.html and ensure your input fields have these exact IDs. 
    // If your HTML uses id="fullName", change 'nameInput' below to 'fullName'.
    const data = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    // UI Loading State Transition
    submitBtn.disabled = true;
    btnText.textContent = 'Processing...';
    loadingIcon.classList.remove('hidden');
    
    // Hide and reset status message classes
    statusMessage.classList.add('hidden');
    statusMessage.classList.remove('bg-emerald-900/50', 'text-emerald-400', 'border', 'border-emerald-800');
    statusMessage.classList.remove('bg-rose-900/50', 'text-rose-400', 'border', 'border-rose-800');

    // Read configuration from config.js
    const webhookUrl = CONFIG.WEBHOOK_URL;

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': CONFIG.API_KEY
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Success UI State
            statusMessage.textContent = 'Thank you! Your request has been successfully submitted. Our team will contact you soon.';
            statusMessage.classList.add('bg-emerald-900/50', 'text-emerald-400', 'border', 'border-emerald-800');
            statusMessage.classList.remove('hidden');
            form.reset();
        } else {
            // HTTP Error State (e.g., 401 Unauthorized, 500 Server Error)
            throw new Error(`Server returned ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Lead submission failed:', error);
        
        // Client-side or Network Error UI State
        statusMessage.textContent = 'An error occurred while submitting your request. Please try again or contact support.';
        statusMessage.classList.add('bg-rose-900/50', 'text-rose-400', 'border', 'border-rose-800');
        statusMessage.classList.remove('hidden');
    } finally {
        // Revert button UI state allowing resubmission if failed
        submitBtn.disabled = false;
        btnText.textContent = 'Submit Request';
        loadingIcon.classList.add('hidden');
    }
});