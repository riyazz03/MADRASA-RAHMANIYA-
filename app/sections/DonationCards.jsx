"use client";

import '../css/donation-cards.css';
import Image from 'next/image'


export default function DonationCards() {
    const handleScroll = (e) => {
        e.preventDefault();
        document.getElementById("payment-card")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    return (
        <section className="donation-cards-section">
            <div className="main-container donation-cards-container">
                <div className="donation-text-container">
                    <h2>Make Your Donations Now !</h2>
                    <p className='islamic-lines'>Prophet Mohammad (peace be upon him) Said
                        <span className='is-bold'> Give Charity Without delay for it stands in the way of Calamity</span>
                        (Al-Tirmidhi ,hadith 589).</p>

                    <button className="donate-now-btn" onClick={handleScroll}>
                        Donate Now
                    </button>

                </div>

                <div className="donation-image-container">
                    <Image src="/donation-images/donation-1.png" width={271} height={210} alt="Donation Image" className='donation-image donation-image-1' />
                    <Image src="/donation-images/donation-2.png" width={271} height={210} alt="Donation Image" className='donation-image donation-image-2' />
                    <Image src="/donation-images/donation-3.png" width={271} height={210} alt="Donation Image" className='donation-image donation-image-3' />
                </div>

            </div>
        </section>
    );
}
