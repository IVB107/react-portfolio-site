import React from 'react'
import 'devicon/devicon.min.css'
import './Skill.css'

const skill = (props) => (
  <div className="Skill">
    <i className={`devicon-${props.name}-plain colored icon`}></i>
  </div>
)

export default skill
