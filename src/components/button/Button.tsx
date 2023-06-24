import React from 'react'
import './button.scss'

type ButtonProps = {
  text: string
  onClick: () => void
}
export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <>
      <button className="btn btn-primary" onClick={onClick}>
        {text}
      </button>
    </>
  )
}
