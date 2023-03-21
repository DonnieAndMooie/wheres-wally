import React from 'react'
import Wally from '../images/wally-standing.png'
import Wenda from '../images/wenda.png'
import Odlaw from '../images/odlaw.gif'
import Wizard from '../images/wizard.gif'

export default function Sidebar({charactersFound}) {
  return (
    <div className='sidebar'>
      <div className={`character ${charactersFound.wally ? "found" : ""}`}>
        <img src={Wally} alt="Wally" />
        <h4>Wally</h4>
      </div>
      <div className={`character ${charactersFound.wenda ? "found" : ""}`}>
        <img src={Wenda} alt="Wenda" />
        <h4>Wenda</h4>
      </div>
      <div className={`character ${charactersFound.odlaw ? "found" : ""}`}>
        <img src={Odlaw} alt="Odlaw" />
        <h4>Odlaw</h4>
      </div>
      <div className={`character ${charactersFound.wizard ? "found" : ""}`}>
        <img src={Wizard} alt="Wizard" />
        <h4>Wizard</h4>
      </div>
    </div>
  )
}
