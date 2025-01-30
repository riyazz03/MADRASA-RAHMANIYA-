import '../css/payment-card.css';
import Image from 'next/image';
import Link from 'next/link'



export default function PaymentCard() {
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
                        <Link className="payment-button active" href="#">₹1,000</Link>
                        <Link className="payment-button" href="#">₹1,500</Link>
                        <Link className="payment-button" href="#">₹2,000</Link>
                    </div>
                    <input className='payment-input' type="text" placeholder='INR ₹ 1,500' />
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
                            </div><div className="payment-icons-divs">
                                <Image
                                    src="/svg/phonepe.svg"
                                    className='payment-svg-icons'
                                    width={30}
                                    height={30}
                                    alt="WhatsApp Svg"
                                />
                            </div><div className="payment-icons-divs">
                                <Image
                                    src="/svg/cards.svg"
                                    className='payment-svg-icons'
                                    width={30}
                                    height={30}
                                    alt="WhatsApp Svg"
                                />
                            </div><div className="payment-icons-divs">
                                <Image
                                    src="/svg/paytm.svg"
                                    className='payment-svg-icons'
                                    width={30}
                                    height={30}
                                    alt="WhatsApp Svg"
                                />
                            </div><div className="payment-icons-divs">
                                <Image
                                    src="/svg/bhim.svg"
                                    className='payment-svg-icons'
                                    width={30}
                                    height={30}
                                    alt="WhatsApp Svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
