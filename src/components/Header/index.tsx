import React from 'react'
import Menu from '../Menu'
import { Headerstyles } from './Header.style'

export default function Header() {
  return (
    <Headerstyles>
        <div className="logo">
            <img src={'/images/packform-logo.png'} alt='' width={184} height={32} />
        </div>
        <div className="menu">
            <Menu />
        </div>
        
    </Headerstyles>
  )
}
