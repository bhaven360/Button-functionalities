import React from 'react'
import "./styles/Button.css"

const Button = ({className, type, text}) => {
  return (
    <div className={className} type={type}>
      {text}
    </div>
  )
}

export default Button
