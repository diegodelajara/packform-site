import React from 'react'
import HomeButton from './HomeButton'
import { Buttonstyles } from './Buttons.style'

export default function Buttons() {
  return (
    <Buttonstyles>
      <HomeButton name={'Customer'} color={'#28a745'}  />
      <HomeButton name={'Dealership'} color={'#007bff'}  />
      <HomeButton name={'Supplier'} color={'#fe8002'}  />
    </Buttonstyles>
  )
}
