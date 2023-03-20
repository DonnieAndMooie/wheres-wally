import React from 'react'
import Icon from '../images/dashed-circle.svg'

export default function Selection({selectionX, selectionY, selectionShown, currentGuess}) {
  function handleGuess(guess, character){
    console.log(character + " " + guess)
  }
  
  return (
    <div className={`selection ${selectionShown ? "" : "hide"}`} style={{left: selectionX + "px", top: selectionY + "px" }}>
        <div className="options">
          <p onClick={() => handleGuess(currentGuess, "Wally")}>Wally</p>
          <p onClick={() => handleGuess(currentGuess, "Wenda")}>Wenda</p>
          <p onClick={() => handleGuess(currentGuess, "Odlaw")}>Odlaw</p>
          <p onClick={() => handleGuess(currentGuess, "Wizard")}>Wizard</p>
        </div>
        <img src={Icon} alt="Circle Icon" className='icon' />
    </div>
  )
}