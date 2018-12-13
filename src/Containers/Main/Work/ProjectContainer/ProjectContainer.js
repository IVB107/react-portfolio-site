import React, { Component } from 'react'
import Project from '../Project/Project'

class ProjectContainer extends Component {
  render(){
    return this.props.projects.map((project, index) => {
        return <Project
          name={project.name}
          background={project.src}
          key={index}
        />
    })
  }
}

export default ProjectContainer
