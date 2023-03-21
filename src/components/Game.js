import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Scene from '../images/airport-scene.png'
import Selection from './Selection'

export default function Game() {
  const [selectionX, setSelectionX] = useState(0)
  const [selectionY, setSelectionY] = useState(0)
  const [selectionShown, setSelectionShown] = useState(false)
  const [currentGuess, setCurrentGuess] = useState(null)
  const [charactersFound, setCharactersFound] = useState({
    wally: false,
    wenda: false,
    odlaw: false,
    wizard: false
  })

  function clickHandler(e){
    const rect = e.target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const imageWidth = e.target.clientWidth
    const imageHeight = e.target.clientHeight
    const percentX = Math.round(((x / imageWidth) * 100) * 100) / 100
    const percentY = Math.round(((y / imageHeight) * 100) * 100) / 100
    console.log(percentX + " " + percentY)
    setSelectionX(x - 110)
    setSelectionY(y - 50)
    setSelectionShown(!selectionShown)
    setCurrentGuess([percentX, percentY])

  }

  useEffect(() => {
    if(Object.values(charactersFound).every(value => value === true)){
      alert("You completed the level!")
    }
  }, [charactersFound])
  return (
    <div className='game'>
        <Header></Header>
        <Sidebar charactersFound={charactersFound}></Sidebar>
        <div className={"scene-div"}>
          <img src={Scene} alt="Airport Scene" onClick={(e) => clickHandler(e)} className={selectionShown ? "" : "pointer"} />
          <Selection selectionX={selectionX}
          selectionY={selectionY}
          selectionShown={selectionShown}
          currentGuess = {currentGuess}
          setSelectionShown={setSelectionShown}
          setCharactersFound={setCharactersFound}
          charactersFound={charactersFound}
          ></Selection>
        </div>
    </div>
  )
}
