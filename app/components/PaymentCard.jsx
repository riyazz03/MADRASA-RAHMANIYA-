"use client";

import '../css/payment-card.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { initializeRazorpayPayment } from '../lib/razorpay-helpers';

export default function PaymentCard() {
    const [selectedAmount, setSelectedAmount] = useState(1000);

    const handleAmountClick = (amount, e) => {
        e.preventDefault();
        setSelectedAmount(amount);
    };

    const handleAmountInput = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setSelectedAmount(Number(value) || 0);
    };

    const handleDonateClick = async () => {
        if (selectedAmount < 1) {
            alert('Please enter a valid amount');
            return;
        }

        await initializeRazorpayPayment(selectedAmount, (response) => {
            console.log('Payment successful:', response);
            // Add any additional success handling here
        });
    };

    // Rest of your component remains the same
    return (
        <section className="payment-card-section">
            <div className="payment-container">
                <div className="payment-social-icons-wrapper">
                    <Image
                        src="/svg/whatsapp.svg"
                        className='payment-social-icons'
                        width={30}
                        height={30}
                        alt="WhatsApp Svg"
                    />
                    <Image
                        src="/svg/facebook.svg"
                        className='payment-social-icons'
                        width={30}
                        height={30}
                        alt="FaceBook Svg"
                    />
                    <Image
                        src="/svg/twitter.svg"
                        className='payment-social-icons'
                        width={30}
                        height={30}
                        alt="Twitter Svg"
                    />
                </div>
                <div className="payment-block">
                    <div className="custom-amount-block">
                        <Link
                            className={`payment-button ${selectedAmount === 1000 ? 'active' : ''}`}
                            href="#"
                            onClick={(e) => handleAmountClick(1000, e)}
                        >
                            ₹1,000
                        </Link>
                        <Link
                            className={`payment-button ${selectedAmount === 1500 ? 'active' : ''}`}
                            href="#"
                            onClick={(e) => handleAmountClick(1500, e)}
                        >
                            ₹1,500
                        </Link>
                        <Link
                            className={`payment-button ${selectedAmount === 2000 ? 'active' : ''}`}
                            href="#"
                            onClick={(e) => handleAmountClick(2000, e)}
                        >
                            ₹2,000
                        </Link>
                    </div>
                    <input
                        className='payment-input'
                        type="text"
                        placeholder='INR ₹ 1,500'
                        value={`INR ₹ ${selectedAmount}`}
                        onChange={handleAmountInput}
                    />
                    <div className="cards-wrapper-block">
                        <p className='card-para-light'>Donate Via :</p>
                        <p className='cards-para-dark'>UPI / CARDS</p>
                        <div className="payment_icons_wrapper">
                            <div className="payment-icons-divs">
                                <Image
                                    src="/svg/gpay.svg"
                                    className='payment-svg-icons'
                                    width={30}
                                    height={30}
                                    alt="WhatsApp Svg"
                                />
                            </div>
                            <div className="payment-icons-divs">
                                <Image
                                    src="/svg/phonepe.svg"
                                    className='payment-svg-icons'
                                    width={30}
                                    height={30}
                                    alt="WhatsApp Svg"
                                />
                            </div>
                            <div className="payment-icons-divs">
                                <Image
                                    src="/svg/cards.svg"
                                    className='payment-svg-icons'
                                    width={30}
                                    height={30}
                                    alt="WhatsApp Svg"
                                />
                            </div>
                            <div className="payment-icons-divs">
                                <Image
                                    src="/svg/paytm.svg"
                                    className='payment-svg-icons'
                                    width={30}
                                    height={30}
                                    alt="WhatsApp Svg"
                                />
                            </div>
                            <div className="payment-icons-divs">
                                <Image
                                    src="/svg/bhim.svg"
                                    className='payment-svg-icons'
                                    width={30}
                                    height={30}
                                    alt="WhatsApp Svg"
                                />
                            </div>
                        </div>
                        <button
                            id='pay-now'
                            className='gradient-button'
                            onClick={handleDonateClick}
                        >
                            DONATE NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>);
}