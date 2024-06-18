import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faIdCard,
  faAngleRight,
  faAngleDown,
  faBoxesPacking,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/style'

const AdminNav = () => {
  const [activeNavItemIndex, setactiveNavItemIndex] = useState(null)

  const handleNavItemClick = (index) => {
    setactiveNavItemIndex(index === activeNavItemIndex ? null : index)
  }
  const links = [
    {
      title: 'Dashboard',
      link: '/driver',
      icon: faHouse,
      subLinks: [],
    },
    {
      title: 'Route',
      link: '/driver/route/1',
      icon: faIdCard,
      subLinks: [],
    },
    {
      title: 'Report',
      link: '/driver/report',
      icon: faBoxesPacking,
      subLinks: [],
    },
    {
      title: 'Profile',
      link: '/driver/profile',
      icon: faUser,
      subLinks: [],
    },
  ]
  return (
    <>
      <nav className="mt-3">
        {links.map((item, index) => (
          <React.Fragment key={item.title}>
            <NavLink
              exact="true"
              className={`${styles.sidebar_item} flex justify-between flex-row`}
              activeclassname="active"
              to={item.link}
              onClick={() => handleNavItemClick(index)}
            >
              <div>
                <FontAwesomeIcon
                  icon={item.icon}
                  className="mr-[10px] w-[25px]"
                />
                <span>{item.title}</span>
              </div>
              {item.subLinks.length > 0 ? (
                <div>
                  <FontAwesomeIcon
                    className="text-right"
                    icon={
                      activeNavItemIndex === index ? faAngleDown : faAngleRight
                    }
                  />
                </div>
              ) : (
                ''
              )}
            </NavLink>
            <ul>
              {item.subLinks.length > 0 && index === activeNavItemIndex
                ? item.subLinks.map((subLinkItem, index) => (
                    <NavLink
                      exact="true"
                      className={`${
                        styles.sidebar_item_sublink
                      } ml-[45px] pl-2 border-l-2 border-[#5E5E5E] hover:border-[#8083FF] ${
                        index === 0 ? 'mt-2' : ''
                      } ${index === item.subLinks.length - 1 ? 'mb-2' : ''}`}
                      activeclassname="active"
                      to={subLinkItem.link}
                    >
                      {subLinkItem.title}
                    </NavLink>
                  ))
                : null}
            </ul>
          </React.Fragment>
        ))}
      </nav>
    </>
  )
}

export default AdminNav
