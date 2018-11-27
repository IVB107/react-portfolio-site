import React, { Component } from 'react'
import Skill from '../Skill/Skill'

class SkillContainer extends Component {
  render() {
    return this.props.skills.map((skill, index) => {
      if (this.props.filter === skill.type || this.props.filter === 'all'){
        return <Skill
          filter={this.props.filter}
          name={skill.name}
          type={skill.type}
          key={index}
        />
      } else {
        return null
      }
    })
  }
}

export default SkillContainer
