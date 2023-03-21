import React from 'react'
import Icon from '../images/dashed-circle.svg'
import { db } from '../Firebase'
import { doc, getDoc } from 'firebase/firestore'

export default function Selection({selectionX,
                                    selectionY,
                                    selectionShown,
                                    currentGuess,
                                    setSelectionShown,
                                    setCharactersFound,
                                    charactersFound}) {
  async function handleGuess(guess, character){
    setSelectionShown(false)
    console.log(character + " " + guess)
    const docRef = doc(db, "levels", "airport")
    const docSnap = await getDoc(docRef)
    const characterPosition = docSnap.data()[character]
    if (characterPosition[0] - guess[0] < 0.5 &&
        characterPosition[0] - guess[0] > -0.5 &&
        characterPosition[1] - guess[1] < 0.5 &&
        characterPosition[1] - guess[1] > -0.5
      ){
      setCharactersFound({...charactersFound, [character]: true})
    }
    
  }
  
  return (
    <div className={`selection ${selectionShown ? "" : "hide"}`} style={{left: selectionX + "px", top: selectionY + "px" }}>
        <div className="options">
          <p onClick={() => handleGuess(currentGuess, "wally")}>Wally</p>
          <p onClick={() => handleGuess(currentGuess, "wenda")}>Wenda</p>
          <p onClick={() => handleGuess(currentGuess, "odlaw")}>Odlaw</p>
          <p onClick={() => handleGuess(currentGuess, "wizard")}>Wizard</p>
        </div>
        <img src={Icon} alt="Circle Icon" className='icon' />
    </div>
  )
}