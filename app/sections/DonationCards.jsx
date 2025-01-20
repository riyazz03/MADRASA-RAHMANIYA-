import '../css/donation-cards.css';
import Image from 'next/image'
import Link from 'next/link'

export default function DonationCards() {
    return (
        <section className="donation-cards-section">
            <div className="main-container donation-cards-container">
                <div className="donation-card-content-wrapper">
                    <h2>Make Your Donations Now !</h2>
                    <p className='islamic-lines'>Prophet Mohammad (peace be upon him) Said
                        <span className='is-bold'> Give Charity Without delay for it stands in the way of Calamity</span>
                        (Al-Tirmidhi ,hadith 589).</p>

                    <Link className='donate-now-btn' href="#">Donate Now</Link>

                </div>
                <div className="image-absolute-wrapper">
                    <Image
                        src="/assets/children-image-1.png"
                        width={500}
                        height={500}
                        className='donation-card-images donation-card-image-1'
                        alt="Madrasa Rahmaniya Carousel"
                    />
                    <Image
                        src="/assets/children-image-2.png"
                        width={500}
                        height={500}
                        className='donation-card-images donation-card-image-2'
                        alt="Madrasa Rahmaniya Carousel"
                    />
                    <Image
                        src="/assets/children-image-3.png"
                        width={500}
                        height={500}
                        className='donation-card-images donation-card-image-3'
                        alt="Madrasa Rahmaniya Carousel"
                    />
                </div>
            </div>
        </section>
    );
}
