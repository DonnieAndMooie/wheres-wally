import React from 'react'
import Icon from '../images/dashed-circle.svg'

export default function Selection({selectionX, selectionY, selectionShown}) {
  return (
    <div className={`selection ${selectionShown ? "" : "hide"}`} style={{left: selectionX + "px", top: selectionY + "px" }}>
        <div className="options">
          <p>Wally</p>
          <p>Wenda</p>
          <p>Odlaw</p>
          <p>Wizard</p>
        </div>
        <img src={Icon} alt="Circle Icon" className='icon' />
    </div>
  )
}
