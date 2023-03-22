import Icon from '../images/dashed-circle.svg'

export default function Selection({selectionX,
                                    selectionY,
                                    selectionShown,
                                    currentGuess,
                                    setSelectionShown,
                                    setCharactersFound,
                                    charactersFound,
                                    positions}) {
                    
  async function handleGuess(guess, character){
    console.log(positions)
    setSelectionShown(false)
    console.log(character + " " + guess)

    const characterPosition = positions[character]
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