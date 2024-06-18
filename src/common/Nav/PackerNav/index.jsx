import React, { useRef, useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWarehouse,
  faBoxesPacking,
  faTruck,
} from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/style'
import { containerList } from '../../../constants/pack'

const PackerNav = () => {
  const [activeNavItemIndex, setactiveNavItemIndex] = useState(null)
  const idSelect = useRef(null)

  const handleNavItemClick = (index) => {
    setactiveNavItemIndex(index === activeNavItemIndex ? null : index)
  }
  const navigate = useNavigate()
  const location = useLocation()
  const handleSelectShipmentChange = (e) => {
    const id = e.target.value
    const path = location.pathname.substring(
      0,
      location.pathname.lastIndexOf('/')
    )
    navigate(`${path}/${id}`)
  }

  useEffect(() => {
    const loadOptions = () => {
      let idList = []
      console.log(location.pathname)
      if (location.pathname.includes('/packer/warehouse'))
        idList = links[0].idList
      idSelect.innerHTML = ''
      if (idList.length > 0) {
        idList.forEach((item) => {
          const option = document.createElement('option')
          option.value = item.id
          option.innerHTML = `Shipment #${item.id}`
          idSelect.current.appendChild(option)
        })
      } else {
        const option = document.createElement('option')
        option.value = 'No shipments'
        option.innerHTML = 'No shipments'
        idSelect.current.appendChild(option)
      }
    }

    loadOptions()
  })

  const links = [
    {
      title: 'Cardboard',
      link: '/packer/1',
      icon: faBoxesPacking,
      idList: null,
    },
    {
      title: 'Vehicle',
      link: '/packer/vehicle',
      icon: faTruck,
      idList: null,
    },
  ]
  return (
    <div className="flex flex-col justify-between flex-1">
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
            </NavLink>
          </React.Fragment>
        ))}
      </nav>
      <div className="mb-4 flex flex-col w-full px-4">
        <h4 className="block mb-2 font-poppins text-lg font-medium text-gray-900">
          Select Shipment ID:
        </h4>
        <select
          ref={idSelect}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-semibold font-poppins rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={handleSelectShipmentChange}
        ></select>
      </div>
    </div>
  )
}

export default PackerNav
