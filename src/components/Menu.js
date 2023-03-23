import React, { useState } from 'react'
import Header from './Header'
import Game from './Game'
import Airport from '../images/airport-scene.png'
import Museum from '../images/museum-scene.png'
import Space from '../images/space-scene.png'

export default function Menu() {
    const [level, setLevel] = useState("menu")

    if (level === "airport"){
        return(
            <Game level="airport" setLevel={setLevel} imgSrc={Airport}></Game>
        )
    }

    if (level === "museum"){
        return(
            <Game level="museum" setLevel={setLevel} imgSrc={Museum}></Game>
        )
    }

    if (level === "space"){
        return(
            <Game level="space" setLevel={setLevel} imgSrc={Space}></Game>
        )
    }


  return (
    <div>
        <Header gameOver={true}></Header>
            <h2 className='level-select-header'>Select A Level</h2>
            <div className="level-select">
            <div className="level">
                <img src={Airport} alt="Airport" onClick={() => setLevel("airport")}/>
                <h4>Airport</h4>
            </div>
            <div className="level">
                <img src={Museum} alt="Museum" onClick={() => setLevel("museum")}/>
                <h4>Museum</h4>
            </div>
            <div className="level">
                <img src={Space} alt="Space" onClick={() => setLevel("space")}/>
                <h4>Space</h4>
            </div>
        </div>
    </div>
  )
}
