import { useState } from 'react'
import { close, logo, menu } from '../../../assets/LandingPage'
import { mtLogo, mtLogoT } from '../../../assets/EmployeePage'
import { navLinks } from '../../../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="fixed w-full flex justify-center itmes-center bg-[#FAF8FF] py-3 z-50">
      <nav className="w-full xl:max-w-[1280px] flex justify-between items-center ">
        <img src={mtLogoT} alt="hoobank" className="h-[36px]" />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
              } text-black`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-center flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                  } text-black`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
