"use client";

import '../css/payment-card.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { initializeRazorpayPayment } from '../lib/razorpay-helpers';

export default function MobilePaymentCard() {
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
        });
    };

    const shareOnSocial = (platform) => {
        const url = encodeURIComponent(window.location.href);
        let shareLink = "";

        switch (platform) {
            case "whatsapp":
                shareLink = `https://api.whatsapp.com/send?text=Check out this donation page: ${url}`;
                break;
            case "facebook":
                shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case "twitter":
                shareLink = `https://twitter.com/intent/tweet?text=Support this cause!&url=${url}`;
                break;
            default:
                return;
        }

        window.open(shareLink, "_blank");
    };

    return (
        <section className="payment-card-section is-desktop-hide">
            <div className="payment-container">
                <div className="payment-social-icons-wrapper">
                    <Image
                        src="/svg/whatsapp.svg"
                        className='payment-social-icons'
                        width={30}
                        height={30}
                        alt="WhatsApp Svg"
                        onClick={() => shareOnSocial("whatsapp")}
                        style={{ cursor: "pointer" }}
                    />
                    <Image
                        src="/svg/facebook.svg"
                        className='payment-social-icons'
                        width={30}
                        height={30}
                        alt="FaceBook Svg"
                        onClick={() => shareOnSocial("facebook")}
                        style={{ cursor: "pointer" }}
                    />
                    <Image
                        src="/svg/twitter.svg"
                        className='payment-social-icons'
                        width={30}
                        height={30}
                        alt="Twitter Svg"
                        onClick={() => shareOnSocial("twitter")}
                        style={{ cursor: "pointer" }}
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
        </section>
    );
}
