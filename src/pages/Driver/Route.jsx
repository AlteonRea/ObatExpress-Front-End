import React from 'react'
import { useParams } from 'react-router-dom'
import styles from '../../styles/style'
import {
  faClock,
  faCircleUser,
  faCircleCheck,
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { shipments, orders, customers } from '../../constants'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'

const Route = () => {
  let { id } = useParams()
  const numericId = parseInt(id, 10)
  let shipment = shipments.find((shipment) => shipment.id === numericId)
  return (
    <div className="py-4 px-10 h-full flex flex-col">
      <h4 className={`${styles.heading4} !text-[#474554] mt-7`}>
        Route Shipment #{id}
      </h4>
      <div className="flex flex-row justify-between mt-10 relative flex-[0_1_auto] max-h-[80%] h-full">
        <div className="flex-1 w-full mr-10 flex justify-center items-center rounded-md ring-2 ring-[#a0a0a0] min-h-full">
          <p>No Route</p>
        </div>
        <div className="pl-10 pr-16 pb-5 pt-10 bg-[#F2ECFF] shadow-[0_0_5px_rgba(152,128,234,0.7)] min-h-full overflow-y-scroll">
          <ul className="list-none p-0">
            <hr className="ml-5 w-full border-[#967DF9] border-[1px]" />
            <li className="border-l-[2px] border-indigo-500 p-[10px] relative m-0 before:content-['\2022'] before:font-[#000] before:text-[36px]  before:absolute before:left-[-8px] before:translate-y-[-70%]">
              <div>
                <h5 className={`${styles.heading5}`}>Pick up</h5>
                <div>
                  <FontAwesomeIcon icon={faCircleCheck} /> Picked up by driver
                </div>
                <div>
                  <FontAwesomeIcon icon={faCircleUser} /> Driver Name
                </div>
                <div>
                  <FontAwesomeIcon icon={faLocationCrosshairs} /> Alamat Gudang
                </div>
                <div>
                  <FontAwesomeIcon icon={faClock} /> 10 April 2024
                </div>
              </div>
            </li>
            <hr className="ml-5 w-full border-[#967DF9] border-[1px]" />
            {shipment.orders_id.map((order_id) => {
              let order = orders.find((order) => order.id === order_id)
              let customer = customers.find(
                (customer) => customer.id === order.customer_id
              )
              console.log(order, customer)
              return (
                <React.Fragment key={order.id}>
                  <li className="border-l-[2px] border-indigo-500 p-[10px] relative m-0 before:content-['\2022'] before:font-[#000] before:text-[36px] before:absolute before:left-[-8px] before:translate-y-[-70%]">
                    <div>
                      <h5 className={`${styles.heading5}`}>Order {order.id}</h5>
                      <div>
                        <FontAwesomeIcon icon={faCircleCheck} /> {order.status}
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faCircleUser} /> {customer.name}
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faLocationCrosshairs} />{' '}
                        {order.address}
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faClock} /> {order.ETA}
                      </div>
                    </div>
                  </li>
                  <hr className="ml-5 w-full border-[#967DF9] border-[1px]" />
                </React.Fragment>
              )
            })}
            <li className="p-[10px] relative m-0 before:content-['\2022'] before:font-[#000] before:text-[36px] before:absolute before:left-[-6px] before:translate-y-[-70%]">
              <div>
                <h5 className={`${styles.heading5}`}>Delivered</h5>
                <div>
                  <FontAwesomeIcon icon={faCircleCheck} /> On Progress
                </div>
                <div>
                  <FontAwesomeIcon icon={faCircleUser} /> Driver Name
                </div>
                <div>
                  <FontAwesomeIcon icon={faLocationCrosshairs} /> Alamat Gudang
                </div>
                <div>
                  <FontAwesomeIcon icon={faClock} /> 10 April 2024
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Route
