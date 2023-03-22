import React from 'react'
import Wally from '../images/wally.png'
import Timer from './Timer'

export default function Header({gameOver}) {
  return (
    <div className='header'>
        <img src={Wally} alt="Wally" className="header-wally" />
        <h1>Where's Wally</h1>
        <Timer gameOver={gameOver}></Timer>
    </div>
  )
}
