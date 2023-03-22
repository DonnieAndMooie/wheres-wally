import React, { useEffect, useState } from 'react'

export default function Timer() {

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [time, setTime] = useState("0:00")

  useEffect(() => {
    const timer = setTimeout(() => {
        setSeconds(seconds + 1)
        if (seconds === 61){
            setSeconds(0)
            setMinutes(minutes + 1)
        }
        if (seconds < 10){
            setTime(`${minutes}:0${seconds}`)
        }
        else{
            setTime(`${minutes}:${seconds}`)
        }
    
      }, 1000);

      return () => {
        clearTimeout(timer)
    }
  }, [minutes, seconds])

  

  
  return (
    <div className='timer'>
        <h2>{time}</h2>
    </div>
  )
}
