import React from 'react'
import '../css/donation-overview.css'

const AdoptStudent = ({ Course, PerYear, PerMonth }) => {
  return (
    <div className="adopt-student-item">
      <p className='adopt-student-course'>{Course}</p>
      <p className='adopt-student-perYear'>{PerYear}</p>
      <p className='adopt-student-perMonth'>{PerMonth}</p>
    </div>
  )
}

export default AdoptStudent