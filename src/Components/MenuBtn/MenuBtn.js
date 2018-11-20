import React from 'react'
import './MenuBtn.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown, faPlus)

const MenuBtn = (props) => (
  <div className="MenuBtn">
    <FontAwesomeIcon
    // onClick={}
    className="ToggleMenu"
    icon="plus"/>
  </div>
)

export default MenuBtn
