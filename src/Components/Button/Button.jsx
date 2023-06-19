import React from 'react'
import "./Button.css"

const Button = (prop) => {
  return (
    <div className='buttonDiv'>
        <button className='button' onClick={prop.calculateBmi}>Calculate</button>
        <button className='button' onClick={prop.resetInput}>Reset</button>
    </div>
  )
}

export default Button