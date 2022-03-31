import React from 'react'
import "./sidebar.css"
const Sidebar = ({name}) => {
  return (
      <div className='chat-sidebar'>
          <h2>{name}</h2>  
    </div>
  )
}

export default Sidebar