import React, { Component } from 'react'
import MenuBtn from '../../Components/MenuBtn/MenuBtn'
import NavIcon from '../../Components/NavIcon/NavIcon'
import './Nav.css'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground, faHome, faCameraRetro, faComments, faCode, faPalette, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

class Nav extends Component {
  constructor(props){
    super(props)

    library.add(faCampground, faHome, faCameraRetro, faComments, faCode, faPalette, faCodeBranch)

    this.state = {
      menuOpen: false,
      icons: [
        { target: 'HOME', name: 'campground'}, { target: 'WORK', name: 'code-branch'}, { target: 'SKILLS', name: 'palette'}, { target: 'ABOUT', name: 'camera-retro'}, { target: 'CONTACT', name: 'comments'}
      ]
    }
  }

  handleToggleMenu = () => {
    const prev = {...this.state}
    this.setState({
      menuOpen: !prev.menuOpen
    })
  }

  render() {

    const navIcons = (
      <div className="Wrapper">
        {this.state.icons.map((icon, index) => {
          return <NavIcon name={icon.name} target={icon.target} key={index}/>
        })}
      </div>
    )

    return (
      <div className={this.state.menuOpen ? "Open" : "Nav"}>
        {navIcons}
        <MenuBtn
          toggleMenu={() => this.handleToggleMenu()}
          menuOpen={this.state.menuOpen}
        />
      </div>
    )
  }
}

export default Nav
