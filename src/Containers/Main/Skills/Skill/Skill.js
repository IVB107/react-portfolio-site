import React, { Component } from 'react'
import 'devicon/devicon.min.css'
import './Skill.css'

class Skill extends Component {

  render() {
    return (
      <div className="Skill">
        <i className={`devicon-${this.props.name}-plain colored icon`}></i>
      </div>
    )
  }
}

export default Skill
