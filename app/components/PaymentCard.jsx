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
        <section id='payment-card' className="payment-card-section">
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
                        <p className='card-para-light'>Donate Via :</p>
                        <p className='cards-para-dark'>UPI / CARDS</p>
                        <div className="payment_icons_wrapper">
                            <div className="payment-icons-divs">
                                <Image
                                    src="/svg/gpay.svg"
                                    className='payment-svg-icons'
                                    width={30}
                                    height={30}
                                    alt="Google Pay"
                                />
                            </div>
                            <div className="payment-icons-divs">
                                <Image
                                    src="/svg/phonepe.svg"
                                    className='payment-svg-icons'
                                    width={30}
                                    height={30}
                                    alt="PhonePe"
                                />
                            </div>
                            <div className="payment-icons-divs">
                                <Image
                                    src="/svg/cards.svg"
                                    className='payment-svg-icons'
                                    width={30}
                                    height={30}
                                    alt="Cards"
                                />
                            </div>
                            <div className="payment-icons-divs">
                                <Image
                                    src="/svg/paytm.svg"
                                    className='payment-svg-icons'
                                    width={30}
                                    height={30}
                                    alt="Paytm"
                                />
                            </div>
                            <div className="payment-icons-divs">
                                <Image
                                    src="/svg/bhim.svg"
                                    className='payment-svg-icons'
                                    width={30}
                                    height={30}
                                    alt="BHIM"
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
                <div className="qr-image-wrapper">
                    <Image
                        src="/assets/upi.png"
                        width={500}
                        height={500}
                        className='qr-image'
                        alt="qr-image"
                    />
                    <p>UPI ID : 9488466414-1@okbizaxis</p>
                </div>
            </div>
        </section>
    );
}
