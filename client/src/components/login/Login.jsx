import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const Login = () => {
  return (
      <div>
          <Sidebar/>
          <h2>
              Log In
          </h2>
          <input file="text" placeholder='token'/>
    </div>
  )
}

export default Login