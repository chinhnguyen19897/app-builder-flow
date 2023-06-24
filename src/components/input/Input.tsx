import React from 'react'
import './input.scss'
import { InputData } from '@~types/flowBuilder'

type InputProps = {
  data: InputData
  name: string
  onChange: (event: { target: HTMLInputElement }) => void
}
export const Input = ({ data, onChange, name }: InputProps) => {
  return (
    <>
      <div className="input-wrapper">
        <label htmlFor={name}>{name}:</label>
        <input
          name={name}
          value={data.description}
          onChange={onChange}
          className="input"
        />
      </div>
    </>
  )
}
