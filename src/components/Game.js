import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Scene from '../images/airport-scene.png'
import Selection from './Selection'

export default function Game() {
  const [selectionX, setSelectionX] = useState(0)
  const [selectionY, setSelectionY] = useState(0)
  const [selectionShown, setSelectionShown] = useState(false)
  const [currentGuess, setCurrentGuess] = useState(null)

  function clickHandler(e){
    const rect = e.target.getBoundingClientRect()
    const x = Math.round(e.clientX - rect.left)
    const y = Math.round(e.clientY - rect.top)
    setSelectionX(x - 110)
    setSelectionY(y - 50)
    setSelectionShown(!selectionShown)
    setCurrentGuess([x, y])

  }
  return (
    <div className='game'>
        <Header></Header>
        <Sidebar></Sidebar>
        <div className={`scene-div ${selectionShown ? "" : "pointer"}`}>
          <img src={Scene} alt="Airport Scene" onClick={(e) => clickHandler(e)} />
          <Selection selectionX={selectionX}
          selectionY={selectionY}
          selectionShown={selectionShown}
          currentGuess = {currentGuess}
          ></Selection>
        </div>
    </div>
  )
}
