import React from 'react'

const DonateFood = ({image, title, price}) => {
  return (
    <div className='donate-food-container'>
        <img src={image} alt="photo" />
        <div className="donate-food-details">
            <h3 className="donate-food-title">{title}</h3>
            <p className="donate-food-price">{price}</p>
        </div>
    </div>
  )
}

export default DonateFood