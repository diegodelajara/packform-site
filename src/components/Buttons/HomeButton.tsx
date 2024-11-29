import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

type HomeButtonProps = {
    name: string
    color: string
    size?: number
}

export default function HomeButton({name, color, size = 16}: HomeButtonProps) {
  return (
    <button style={{backgroundColor: color}}>{name} <FaArrowRight size={size} /></button>
  )
}
