import { Link } from 'react-router-dom'
import { mtLogoT } from '../assets/EmployeePage'
import Nav from './Nav'
import styles from '../styles/style'
import '../styles/index.scss'

const Sidebar = () => {
  return (
    <div className="bg-[#D6D3EB] w-[260px] fixed top-0 left-0 z-[3] h-[100%] p-[10px] border-r-2 border-[#D6F4FF] flex flex-col ">
      <Link className="flex items-center px-[8px] py-[0]" to="/">
        <img
          src={mtLogoT}
          className="block m-[8px] h-[54px] w-[200px]"
          alt="logo"
        />
      </Link>
      <hr className="border-[#8685EF] border mb-2" />
      <Nav />
    </div>
  )
}

export default Sidebar
