import React from 'react'
import '../css/expenses.css'

const Expenses = ({ content, money }) => {
  return (
    <div className="expense-item">
      <p className='expense-content'>{content}</p>
      <p className='expense-money'>{money}</p>
    </div>
  )
}

export default Expenses