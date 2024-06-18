import './App.css'
import { Routes, Route } from 'react-router-dom'
import EmployeeLayout from './common/EmployeeLayout'
import Admin from './pages/Admin'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/Login'
import AdminDashboard from './pages/Admin/Dashboard'
import AddEmployee from './pages/Admin/AddEmployee'
import EmployeeList from './pages/Admin/EmployeeList'
import ShipmentDetail from './pages/Admin/ShipmentDetail'
import OrderDetail from './pages/Admin/OrderDetail'
import Vehicles from './pages/Admin/Vehicles'

import Driver from './pages/Driver'
import DriverDashboard from './pages/Driver/Dashboard'
import DriverRoute from './pages/Driver/Route'
import DriverReport from './pages/Driver/Report'
import DriverProfile from './pages/Driver/Profile'

import Packer from './pages/Packer'
import PackerCardboard from './pages/Packer/Cardboard'

import PrototypeEnv from './pages/Proto'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/" element={<EmployeeLayout />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="" element={<AdminDashboard />} />
            <Route path="employee">
              <Route path="list" element={<EmployeeList />} />
              <Route path="add" element={<AddEmployee />} />
            </Route>
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="shipment/:id" element={<ShipmentDetail />}></Route>
            <Route path="order/:id" element={<OrderDetail />}></Route>
            <Route path="trouble"></Route>
          </Route>
          <Route path="/driver" element={<Driver />}>
            <Route path="" element={<DriverDashboard />}></Route>
            <Route path="route/:id" element={<DriverRoute />}></Route>
            <Route path="report" element={<DriverReport />}></Route>
            <Route path="profile" element={<DriverProfile />}></Route>
          </Route>
          <Route path="packer" element={<Packer />}>
            <Route path=":id" element={<PackerCardboard />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/proto" element={<PrototypeEnv />} />
      </Routes>
    </>
  )
}

export default App
