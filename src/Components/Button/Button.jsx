// Import statements
import React from 'react'
import "./Button.css"

const Button = (prop) => {
  return (
    <div className='buttonDiv'>
      {/* Creation of buttons and values and functions passed in through props from the parent tag */}
        <button className='button' onClick={prop.calculateBmi}>Calculate</button>
        <button className='button' onClick={prop.resetInput}>Reset</button>
    </div>
  )
}

export default Button