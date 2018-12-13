import React from 'react'
import './Link.css'

const link = (props) => (
  <div className="Link">
    <i className={`${props.name}` === 'envelope'
      ? `fas fa-${props.name} Icon` 
      : `fab fa-${props.name} Icon`}></i>
  </div>
)

export default link
