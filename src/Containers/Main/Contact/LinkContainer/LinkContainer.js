import React, { Component } from 'react'
import Link from './Link/Link'

class LinkContainer extends Component {
  render() {
    return this.props.links.map((link, index) => {
        return <Link
          name={link.name}
          type={link.type}
          key={index}
        />
    })
  }
}

export default LinkContainer
