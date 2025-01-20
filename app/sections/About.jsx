import '../css/about.css';
import PaymentCard from '../components/PaymentCard';
import AboutContent from './AboutContent';

export default function About() {
    return (
        <section className="about-section">
            <div className="main-container about-container">
                <AboutContent />
                <PaymentCard />
            </div>
        </section>
    );
}
