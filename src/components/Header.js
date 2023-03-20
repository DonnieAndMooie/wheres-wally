import React from 'react'
import Wally from '../images/wally.png'

export default function Header() {
  return (
    <div className='header'>
        <img src={Wally} alt="Wally" className="header-wally" />
        <h1>Where's Wally</h1>
        <h2 className='timer'>0:00</h2>
    </div>
  )
}
