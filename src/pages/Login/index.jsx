import React, { useState } from 'react'
import styles from '../../styles/style'
import '../../styles/index.scss'
import { mtLogoT } from '../../assets/EmployeePage'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    if (username === 'admin' && password === 'admin') navigate('/admin')
    else if (username === 'driver' && password === 'driver') navigate('/driver')
    else if (username === 'packer' && password === 'packer')
      navigate('/packer/1')
    else console.log('Invalid username or password')
  }
  return (
    <div>
      <Link to="/" className="fixed left-12 top-4">
        <img src={mtLogoT} className="block m-[8px] h-[50px]" alt="logo" />
      </Link>
      <div
        className={`${styles.fullScreen} h-[100vh] flex justify-center items-center`}
      >
        <div className="flex flex-col w-[25%]">
          <h4 className={`${styles.heading2} mb-2`}>Sign In</h4>
          <p className={`${styles.paragraph} text-[14px] mb-4`}>
            Enter your account details below
          </p>
          <form className="flex flex-col" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email Address"
              className={`my-4 ${styles.inputForm} `}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className={`my-4  ${styles.inputForm}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p
              className={`${styles.paragraph} text-right text-[14px] mt-3 !text-[#0b6efe] cursor-pointer `}
            >
              Forgot your password?
            </p>
            <button id="loginBtn" type="submit" styles="mt-5 my-button">
              Submit
            </button>
          </form>

          <span className="flex justify-center mt-4">
            <p className={`${styles.paragraph} text-right text-[14px] mr-2 `}>
              Not registered yet?
            </p>
            <p
              className={`${styles.paragraph} text-right text-[14px] !text-[#0b6efe] cursor-pointer`}
            >
              Create an account
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
