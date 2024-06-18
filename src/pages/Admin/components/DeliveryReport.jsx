import React, { useState } from 'react'
import styles from '../../../styles/style'
import {
  faForwardFast,
  faCaretRight,
  faBackwardFast,
  faCaretLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
const DeliveryReport = ({ title, deliveryStatus, shipments, employees }) => {
  /*
    DASHBOARD DATA

    Data 1: deliveryStatus
    Data 2: shipments
    Data 3: employees
  */
  const [activeItem, setActiveItem] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const lastItemIndex = itemsPerPage * currentPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  let filteredShipments

  const filterDeliveryData = (status) => {
    return shipments.filter((item) => item.status === status)
  }

  if (activeItem === 0) {
    filteredShipments = shipments
  } else {
    const status = deliveryStatus.find((status) => status.id === activeItem)
    filteredShipments = filterDeliveryData(status.title)
  }

  const lastPageNumber = Math.ceil(filteredShipments.length / 20)

  const currentDeliveryData = filteredShipments.slice(
    firstItemIndex,
    lastItemIndex
  )

  const handleListClick = (index) => {
    setActiveItem(index)
    firstPage()
  }

  const firstPage = () => {
    setCurrentPage(1)
  }
  const nextPage = () => {
    if (currentPage < lastPageNumber) setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const lastPage = () => {
    setCurrentPage(lastPageNumber)
  }

  return (
    <div className="mt-5">
      <h3 className={`${styles.heading4} !text-[#474554]`}>{title}</h3>
      <div className="flex flex-row justify-between mt-5 items-center">
        <ul className="flex flex-row">
          {[{ id: 0, title: 'All Deliveries' }, ...deliveryStatus].map(
            (item, index) => (
              <li
                key={index}
                className={`${
                  index === activeItem
                    ? 'border-b-[#8083FF] text-[#8083FF]'
                    : 'border-b-[#6B7280] text-[#5e5e5e] '
                } font-medium px-7 border-b-2 hover:cursor-pointer`}
                onClick={() => handleListClick(index)}
              >
                {item.title}
              </li>
            )
          )}
        </ul>
        <form>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="text-[18px] rounded-lg px-3 border-2"
          />
        </form>
      </div>
      <div className="bg-[#F2ECFF] m-4 rounded-lg">
        <table className="w-[100%]">
          <thead className="bg-[#ACA7CB] ">
            <tr className="h-[40px]">
              <th className="pr-3">ID</th>
              <th className="text-left">Driver</th>
              <th className="text-left">Departure Date</th>
              <th className="text-left">Completion Date</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentDeliveryData.map((item) => {
              const driverInfo = employees.find(
                (employee) => employee.id === item.driver_id
              )
              const statusInfo = deliveryStatus.find(
                (status) => status.id === item.status_id
              )
              return (
                <tr key={item.id} className="h-[40px]">
                  <th className="pr-3">
                    <Link
                      to={`/admin/shipment/${item.id}`}
                      className="underline hover:text-[#8083FF]"
                    >
                      {item.id}
                    </Link>
                  </th>
                  <th className="text-left">
                    <a href="" className="underline hover:text-[#8083FF]">
                      {driverInfo.name}
                    </a>
                  </th>
                  <th className="text-left">{item.departure_date}</th>
                  <th className="text-left">
                    {item.completion_date === null ? '-' : item.completion_date}
                  </th>
                  <th className="text-left">{item.status}</th>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="flex justify-between flex-row items-center p-5 border-t-2">
          <div>
            Showing {currentPage * 20 - 19} -{' '}
            {currentPage === lastPageNumber
              ? filteredShipments.length
              : currentPage * 20}{' '}
            of {filteredShipments.length}{' '}
          </div>
          <div className="flex justify-between flex-row items-center">
            <FontAwesomeIcon
              className="mr-3 hover:text-[20px]"
              icon={faBackwardFast}
              onClick={firstPage}
            />
            <FontAwesomeIcon
              className="mr-3 hover:text-[20px]"
              icon={faCaretLeft}
              onClick={prevPage}
            />
            <form action="">
              <input
                type="number"
                className="w-[40px]"
                name=""
                id=""
                placeholder={currentPage}
              />{' '}
              / {Math.ceil(shipments.length / 20)}
            </form>
            <FontAwesomeIcon
              className="ml-3 hover:text-[20px]"
              icon={faCaretRight}
              onClick={nextPage}
            />
            <FontAwesomeIcon
              className="ml-3 hover:text-[20px]"
              icon={faForwardFast}
              onClick={lastPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryReport
