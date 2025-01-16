import '../css/navbar.css';
import Image from 'next/image'
import Link from 'next/link'


export default function Navbar() {
    return (
        <navbar>
            <div className="main-container navbar-container">
                <Image
                    src="/assets/logo.png"
                    width={500}
                    height={500}
                    className='nav-logo'
                    alt="Madrasa Rahmaniya Quasimul Uloom"
                />

                <Link className='nav-button' href="#">MAKE A DONATION NOW</Link>
            </div>
        </navbar>
    );
}
