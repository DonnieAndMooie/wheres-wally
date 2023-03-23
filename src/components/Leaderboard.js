import { getDoc, doc, onSnapshot, query } from 'firebase/firestore'
import { db } from '../Firebase'
import React, { useEffect, useState } from 'react'
import Header from './Header'

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([])


   useEffect(() => {
    function sortArray(array){
      console.log("before:")
      console.log(array)
        array.sort(function (x, y){
          const [xMins, xSecs] = x[1].split(":")
          const [yMins, ySecs] = y[1].split(":")
          const differenceMins = xMins - yMins
          if (differenceMins !== 0){
            return differenceMins
          }
          return xSecs - ySecs 
        })
        console.log("after:")
        console.log(array)
        return array
    }


    function createArrayFromData(data){
      setLeaderboardData([])
      const array = []
      for (const [name, time] of Object.entries(data)){
        array.push([name, time])
      }
      setLeaderboardData(sortArray(array))
    }

    const unsub = onSnapshot(doc(db, "leaderboards", "airport"), (doc) => {
      const data = doc.data()
      createArrayFromData(data)
    })
  },[])

    
  return (
    <div>
      <Header gameOver={true}></Header>
      <div className='leaderboard'>
        <h1 className='leaderboard-header'>Leaderboard</h1>
        {leaderboardData.map((item, i) => <div className='leaderboard-item' key={i}>
          <p className="player">{item[0]}</p>: <p className="time">{item[1]}</p></div>)}
    </div>
    </div>
    
  )
}
