import React from 'react'
import './MenuBtn.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

const MenuBtn = (props) => (
  <div className="MenuBtn" onClick={props.toggleMenu}>
    <FontAwesomeIcon
    className={props.menuOpen ? "MenuOpen" : "MenuClosed"}
    icon="plus"/>
  </div>
)

export default MenuBtn
