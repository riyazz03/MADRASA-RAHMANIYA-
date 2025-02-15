import '../css/about.css';
import PaymentCard from '../components/PaymentCard';
import AboutContent from './AboutContent';
import MobilePaymentCard from '../components/Mobilepayment';

export default function About() {
    return (
        <section className="about-section">
            <div className="main-container about-container">
                <MobilePaymentCard />
                <AboutContent />
                <PaymentCard />
            </div>
        </section>
    );
}
