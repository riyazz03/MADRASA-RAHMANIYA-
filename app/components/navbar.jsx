import '../css/navbar.css';
import Image from 'next/image'
import Link from 'next/link'


export default function Navbar() {
    return (
        <navbar>
            <div className="main-container navbar-container">
                <Image
                    src="/assets/logo.png"
                    width={250}
                    height={54}
                    className='nav-logo'
                    alt="Madrasa Rahmaniya Quasimul Uloom"
                />

                <Link className='nav-button' href="#">Donate Now</Link>
            </div>
        </navbar>
    );
}
