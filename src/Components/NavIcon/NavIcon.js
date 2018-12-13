import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground, faHome, faCameraRetro, faMountain, faCode, faKeyboard, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

library.add(faCampground, faHome, faCameraRetro, faMountain, faCode, faKeyboard, faCodeBranch)

const NavIcon = (props) => (
  <div className="Container">
    <div className="IconWrapper">
      <FontAwesomeIcon icon={props.name} className="Icon"/>
    </div>
    <p className="IconName">{props.target}</p>
  </div>
)

export default NavIcon
