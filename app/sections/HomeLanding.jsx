import '../css/home-landing-section.css';
import Image from 'next/image'

export default function HomeLading() {
    return (
        <section className="home-landing-section">
            <div className="main-container home-hero-container">
                <h1 className='hero-content'>In supporting <span className='is-light-italic'>our madrassa</span> ,<span className='is-black'> you&apos;re helping create a foundation of learning and light.</span> May each gift you give be returned to you as a place in paradise.</h1>
            </div>
            <div className="hero-carousel-wrapper">
                <div className="hero-donate-now-button">
                    <p className='donate-now-button-text'>Donate Now  <Image
                        src="/svg/donate-arrow.svg"
                        className='donate-arrow-svg'
                        width={20}
                        height={20}
                        alt="Arrow Svg"
                    /></p>
                </div>
                <div className="hero-carousel-ticker">
                    <div className="hero-images">
                        <Image
                            src="/carousel-images/carousel-1.png"
                            width={500}
                            height={500}
                            className='hero-carousel-image'
                            alt="Madrasa Rahmaniya Carousel"
                        />
                    </div>
                    <div className="hero-images">
                        <Image
                            src="/carousel-images/carousel-2.png"
                            width={500}
                            height={500}
                            className='hero-carousel-image'
                            alt="Madrasa Rahmaniya Carousel"
                        />
                    </div>
                    <div className="hero-images">
                        <Image
                            src="/carousel-images/carousel-3.png"
                            width={500}
                            height={500}
                            className='hero-carousel-image'
                            alt="Madrasa Rahmaniya Carousel"
                        />
                    </div>
                </div>
                <div className="hero-carousel-ticker">
                    <div className="hero-images">
                        <Image
                            src="/carousel-images/carousel-1.png"
                            width={500}
                            height={500}
                            className='hero-carousel-image'
                            alt="Madrasa Rahmaniya Carousel"
                        />
                    </div>
                    <div className="hero-images">
                        <Image
                            src="/carousel-images/carousel-2.png"
                            width={500}
                            height={500}
                            className='hero-carousel-image'
                            alt="Madrasa Rahmaniya Carousel"
                        />
                    </div>
                    <div className="hero-images">
                        <Image
                            src="/carousel-images/carousel-3.png"
                            width={500}
                            height={500}
                            className='hero-carousel-image'
                            alt="Madrasa Rahmaniya Carousel"
                        />
                    </div>
                </div>
                <div className="hero-carousel-ticker">
                    <div className="hero-images">
                        <Image
                            src="/carousel-images/carousel-1.png"
                            width={500}
                            height={500}
                            className='hero-carousel-image'
                            alt="Madrasa Rahmaniya Carousel"
                        />
                    </div>
                    <div className="hero-images">
                        <Image
                            src="/carousel-images/carousel-2.png"
                            width={500}
                            height={500}
                            className='hero-carousel-image'
                            alt="Madrasa Rahmaniya Carousel"
                        />
                    </div>
                    <div className="hero-images">
                        <Image
                            src="/carousel-images/carousel-3.png"
                            width={500}
                            height={500}
                            className='hero-carousel-image'
                            alt="Madrasa Rahmaniya Carousel"
                        />
                    </div>
                </div>
            </div>
            <div className="overlay-blue"></div>
        </section>
    );
}
