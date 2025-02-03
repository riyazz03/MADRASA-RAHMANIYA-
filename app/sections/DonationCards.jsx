import '../css/donation-cards.css';
import Image from 'next/image'
import Link from 'next/link'

export default function DonationCards() {
    return (
        <section className="donation-cards-section">
            <div className="main-container donation-cards-container">
                <div className="donation-text-container">
                    <h2>Make Your Donations Now !</h2>
                    <p className='islamic-lines'>Prophet Mohammad (peace be upon him) Said
                        <span className='is-bold'> Give Charity Without delay for it stands in the way of Calamity</span>
                        (Al-Tirmidhi ,hadith 589).</p>
    
                    <Link className='donate-now-btn' href="#">Donate Now</Link>

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
