import React from 'react'
import "./styles/Button.css"

const Button = ({className, type, text}) => {
  return (
    <div className="primary_class_button" type={type}>
      {text}
    </div>
  )
}

export default Button
