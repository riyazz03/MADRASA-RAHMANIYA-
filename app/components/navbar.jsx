"use client";

import '../css/navbar.css';
import Image from 'next/image'
import Link from 'next/link'


export default function Navbar() {
    return (
        <nav>
            <div className="main-container navbar-container">
                <Image
                    src="/assets/logo.png"
                    width={250}
                    height={250}
                    className='nav-logo'
                    alt="Madrasa Rahmaniya Quasimul Uloom"
                />

                <Link
                    className="nav-button"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("payment-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                >
                    Donate Now
                </Link>

            </div>
        </nav>
    );
}
