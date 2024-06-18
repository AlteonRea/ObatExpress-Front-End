import React from 'react'
import '../../styles/index.scss'
import { Outlet, useLocation } from 'react-router-dom'

const Driver = () => {
  let location = useLocation()
  return (
    <div className="ml-[260px] bg-[#fff] h-full">
      <Outlet />
    </div>
  )
}

export default Driver
