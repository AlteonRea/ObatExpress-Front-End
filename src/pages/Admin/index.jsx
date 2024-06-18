import React from 'react'
import '../../styles/index.scss'
import { AdminNavbar } from './components'
import { Outlet, useLocation } from 'react-router-dom'

const Admin = () => {
  let location = useLocation()
  return (
    <div className="ml-[260px] bg-[#FFFFFF] h-full">
      <AdminNavbar location={location} />
      <Outlet />
    </div>
  )
}

export default Admin
