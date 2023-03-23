import React, { useState } from 'react'
import Header from './Header'
import Leaderboard from './Leaderboard'
import { db } from '../Firebase'
import { doc, setDoc } from 'firebase/firestore'

export default function Form({timeCompleted}) {
    const [submitted, setSubmitted] = useState(false)

    async function submitHandler(e){
        e.preventDefault()
        setSubmitted(true)
        const inputtedName = document.getElementById("name").value
        await setDoc(doc(db, "leaderboards", "airport"), {
            [inputtedName]: timeCompleted
        }, {merge: true})
    }

    if (submitted){
        return(
            <Leaderboard></Leaderboard>
        )
    }
    else{
        return (
            <div>
                <Header gameOver={true}></Header>
                <div className="form">
                    <h3>Congratulations! You completed the level!</h3>
                    <p className="time">Your time was {timeCompleted}!</p>
                    <form action="" onSubmit={(e) => submitHandler(e)}>
                    <label htmlFor="name">Please enter your name: 
                        <input type="text" id='name' name='name' required/>
                        <button className="submit-btn" type='submit'>Confirm</button>
                    </label>
                    </form>
                </div>
            </div>
          )
    }
  
}
