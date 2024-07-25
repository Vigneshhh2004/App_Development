import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="normal">
      <form>
        <label>
            Username
        </label>
        <input type="text"></input>
        <br></br>
        <label>
            Password
        </label>
        <input type="password"></input>
        <br></br>
        <label>
            <p>Doesn't Have An Account ? <Link className='link' to='/register'>Create One !</Link></p>
        </label>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default Login
