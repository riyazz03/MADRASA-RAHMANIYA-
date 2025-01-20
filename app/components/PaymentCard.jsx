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
                    <input className='payment-input' type="text" placeholder='₹ 1,500'/>
                </div>
            </div>
        </section>
    );
}
