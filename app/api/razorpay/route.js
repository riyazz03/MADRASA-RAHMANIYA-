// app/api/razorpay/route.js
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

// Initialize Razorpay with explicit key check
function getRazorpayInstance() {
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_SECRET;
    
    if (!key_id || !key_secret) {
        throw new Error('RAZORPAY_KEY_ID and RAZORPAY_SECRET must be provided');
    }

    return new Razorpay({
        key_id: key_id,
        key_secret: key_secret
    });
}

// API route handler
export async function POST(request) {
    try {
        const { amount } = await request.json();
        const razorpay = getRazorpayInstance();

        const options = {
            amount: amount * 100, // Convert to paise
            currency: 'INR',
            receipt: 'order_' + Date.now(),
        };

        const order = await razorpay.orders.create(options);
        return NextResponse.json({ success: true, order });
    } catch (error) {
        console.error('Razorpay Error:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}