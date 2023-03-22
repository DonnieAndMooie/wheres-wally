import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Scene from '../images/airport-scene.png'
import Selection from './Selection'
import RedCircle from '../images/red-circle.svg'
import { db } from '../Firebase'
import { doc, getDoc } from 'firebase/firestore'

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

  const [positions, setPositions] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData(){
      try{
        const docRef = doc(db, "levels", "airport")
        const docSnap = await getDoc(docRef)
        setPositions(docSnap.data())
        setLoading(false)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[loading])
                   

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

  function convertToPixels(position){
    const percentX = position[0]
    const percentY = position[1]
    const decimalWidth = percentX / 100
    const decimalHeight = percentY / 100
    const image = document.querySelector(".scene")
    const imageWidth = image.clientWidth
    const imageHeight = image.clientHeight
    console.log([decimalWidth * imageWidth, decimalHeight * imageHeight])
    return [decimalWidth * imageWidth, decimalHeight * imageHeight]
    

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
          <img src={Scene} alt="Airport Scene" onClick={(e) => clickHandler(e)} className={`scene ${selectionShown ? "" : "pointer"}`}/>
          <Selection selectionX={selectionX}
          selectionY={selectionY}
          selectionShown={selectionShown}
          currentGuess = {currentGuess}
          setSelectionShown={setSelectionShown}
          setCharactersFound={setCharactersFound}
          charactersFound={charactersFound}
          positions={positions}
          ></Selection>

          <img src={RedCircle} alt="Red Circle" className='red-circle' 
          style={positions && charactersFound.wally ? {left: convertToPixels(positions.wally)[0] -16 + "px", top: convertToPixels(positions.wally)[1] -10 + "px"} : {display:"none"}}/>
          <img src={RedCircle} alt="Red Circle" className='red-circle' 
          style={positions && charactersFound.wenda ? {left: convertToPixels(positions.wenda)[0] -16 + "px", top: convertToPixels(positions.wenda)[1] -10 + "px"} : {display:"none"}}/>
          <img src={RedCircle} alt="Red Circle" className='red-circle' 
          style={positions && charactersFound.odlaw ? {left: convertToPixels(positions.odlaw)[0] -16 + "px", top: convertToPixels(positions.odlaw)[1] -10 + "px"} : {display:"none"}}/>
          <img src={RedCircle} alt="Red Circle" className='red-circle' 
          style={positions && charactersFound.wizard ? {left: convertToPixels(positions.wizard)[0] -16 + "px", top: convertToPixels(positions.wizard)[1] -10 + "px"} : {display:"none"}}/>
        </div>
    </div>
  )
}
