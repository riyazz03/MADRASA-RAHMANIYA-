import React from 'react'
import '../css/donation-overview.css'
import '../css/about-content.css';
import Image from 'next/image'
import Link from 'next/link'
import expenses from '../sections/expenses.json';
import adoptStudent from '../sections/adoptStudent.json';
import Expenses from '../components/Expenses';
import AdoptStudent from '../components/AdoptStudent';
import data from '../sections/donateFood.json'

export default function AboutContent() {

    // Convert data to array if it's not already
    const donationData = Array.isArray(data) ? data : Object.values(data);

    return (
        <div>
        <Image src="/assets/group-photo.png" width={720} height={323} alt="Donation Overview" />
        <div className="donation-overview-content">
          <h4 className='donation-overview-title'>Dear Brothers Assalamualaikum,</h4>
          <p>Rahmaniya Masjid and Madrasa are located at Budur village in Vellore district. Currently, students pursuing the education do not have adequate classrooms, hostel,  kitchen and dining hall. Currently, the construction is under progress as it is an  immediate and necessity needs to accomplish. The estimated construction cost is  around Rupees 1,27,00,000/- (One crore twenty seven lakhs rupees) Hence, request you to support and contribute towards the construction and get long lasting rewards for yourself and delegate it for your beloved ancestors. Those who pursue Islamic education are the successor of Prophets. Support them and  get the mansions and the beautiful gardens built for you in the heaven. May Allah accept your contribution and rewards the best.</p>
        </div>

        <div className="expense-breakdown">
            <h1 className='expense-breakdown-title'>Where Your Money Goes ?</h1>
            <div className="expense-breakdown-table">
              {expenses.map((item) => (
                <Expenses className="expense-item" key={item.id} content={item.content} money={item.money} />
              ))}
            </div>
        </div>
        <div className="adopt-student">
          <h1 className='adopt-student-title'>Can you Adopt a Student?</h1>
          <div className="adopt-student-table">
              {adoptStudent.map((item) => (
                <AdoptStudent className="adopt-student-item" Course={item.Course} PerYear={item.PerYear} PerMonth={item.PerMonth} />
              ))}
          </div>
        </div>
        <div className="trust-youtube-video">
          <h4 className='trust-youtube-video-title'>| MADRASA RAHMANIYA QUASIMUL ULOOM TRUST</h4>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/CZ3R6nmhseQ?si=w0uqq1sC7cmgjOXL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
    </div>
    );
}
 

