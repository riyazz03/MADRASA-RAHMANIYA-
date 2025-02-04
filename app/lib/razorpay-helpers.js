// lib/razorpay-helpers.js
export const initializeRazorpayPayment = async (amount, onSuccess) => {
    // Load Razorpay SDK
    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
        alert('Razorpay SDK failed to load. Please check your internet connection.');
        return;
    }

    try {
        // Create order
        const response = await fetch('/api/razorpay', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount }),
        });

        const data = await response.json();
        if (!data.success) throw new Error(data.error || 'Failed to create order');

        // Configure Razorpay options
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // This must be defined in .env.local
            amount: data.order.amount,
            currency: data.order.currency,
            name: 'Madrasa Rahmania',
            description: 'Donation',
            order_id: data.order.id,
            handler: function (response) {
                if (onSuccess) {
                    onSuccess(response);
                }
                alert('Payment successful! Thank you for your donation.');
            },
            prefill: {
                name: '',
                email: '',
                contact: ''
            },
            theme: {
                color: '#528FF0'
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

    } catch (error) {
        console.error('Payment Error:', error);
        alert('Error: ' + error.message);
    }
};