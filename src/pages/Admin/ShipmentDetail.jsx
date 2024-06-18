import React from 'react'
import { useParams } from 'react-router-dom'
import styles from '../../styles/style'
import {
  faClock,
  faCircleUser,
  faCircleCheck,
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MapContainer from './components/MapContainer'
import {
  shipments,
  employees,
  vehicles,
  orders,
  customers,
} from '../../constants/index'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
const ShipmentDetail = () => {
  let { id } = useParams()
  const numericId = parseInt(id, 10)
  let shipment = shipments.find((shipment) => shipment.id === numericId)
  if (!shipment)
    return (
      <div className="flex items-center justify-center">Shipment Not Found</div>
    )
  let packer = employees.find((employee) => employee.id === shipment.packer_id)
  let driver = employees.find((employee) => employee.id === shipment.driver_id)
  let vehicle = vehicles.find((vehicle) => vehicle.id === shipment.vehicle_id)
  let isShipmentFinished = false
  console.log(packer, driver, shipment)
  return (
    <div>
      <div className="p-10px px-10">
        <h4 className={`${styles.heading4} mt-7 !text-[#474554] mb-2`}>
          Shipment ID #{id}
        </h4>
        <div className="flex justify-between w-full">
          <div className="flex-1 w-full pr-10">
            <div className="flex flex-row">
              <div className="flex-1">
                <h5 className={`${styles.heading5}`}>Shipment Info</h5>
                <div className="flex flex-row justify-between">
                  <div className="flex-1">
                    <div>
                      <p className={`${styles.infoTitle}`}>ID</p>
                      <p className={`${styles.infoValue}`}>{shipment.id}</p>
                    </div>
                    <div>
                      <p className={`${styles.infoTitle}`}>Schedule</p>
                      <p className={`${styles.infoValue}`}>
                        {shipment.departure_date}
                      </p>
                    </div>
                    <div>
                      <p className={`${styles.infoTitle}`}>Estimated Time</p>
                      <p className={`${styles.infoValue}`}>
                        {shipment.estimated_completion_date}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div>
                      <p className={`${styles.infoTitle}`}>Total Weight (KG)</p>
                      <p className={`${styles.infoValue}`}>7</p>
                    </div>
                    <div>
                      <p className={`${styles.infoTitle}`}>Total Price (IDR)</p>
                      <p className={`${styles.infoValue}`}>185.000</p>
                    </div>
                    <div>
                      <p className={`${styles.infoTitle}`}>
                        Total Distance (KM)
                      </p>
                      <p className={`${styles.infoValue}`}>17</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row justify-between">
                <div className="flex-1">
                  <h5 className={`${styles.heading5}`}>Packer Info</h5>
                  <div>
                    <p className={`${styles.infoTitle}`}>Packer ID</p>
                    <p className={`${styles.infoValue}`}>{packer.id}</p>
                  </div>
                  <div>
                    <p className={`${styles.infoTitle}`}>Packer Name</p>
                    <p className={`${styles.infoValue}`}>{packer.name}</p>
                  </div>
                  <div>
                    <p className={`${styles.infoTitle}`}>Packer Contact</p>
                    <p className={`${styles.infoValue}`}>{packer.phone}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className={`${styles.heading5}`}>Driver Info</h5>
                  <div>
                    <p className={`${styles.infoTitle}`}>Driver ID</p>
                    <p className={`${styles.infoValue}`}>{driver.id}</p>
                  </div>
                  <div>
                    <p className={`${styles.infoTitle}`}>Driver Name</p>
                    <p className={`${styles.infoValue}`}>{driver.name}</p>
                  </div>
                  <div>
                    <p className={`${styles.infoTitle}`}>Driver Contact</p>
                    <p className={`${styles.infoValue}`}>{driver.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div>
              <h5 className={`${styles.heading5}`}>Additional Info</h5>
              <div className="flex flex-row">
                <div className="flex-1">
                  <p className={`${styles.infoTitle}`}>Vehicle Number</p>
                  <p className={`${styles.infoValue}`}>{vehicle.plateNumber}</p>
                </div>
                <div className="flex-1">
                  <p className={`${styles.infoTitle}`}>Vehicle Type</p>
                  <p className={`${styles.infoValue}`}>{vehicle.type}</p>
                </div>
                <div className="flex-1">
                  <p className={`${styles.infoTitle}`}>Orders ID</p>
                  <p className={`${styles.infoValue}`}>
                    {shipment.orders_id.join(', ')}
                  </p>
                </div>
                <div className="flex-1">
                  <p className={`${styles.infoTitle}`}>Delivery Status</p>
                  <p className={`${styles.infoValue}`}>{shipment.status}</p>
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div className="h-[400px] w-full flex items-center justify-center ring-2 ring-[#a0a0a0]">
              {/* <MapContainer /> */}
              <p className="text-[#5e5e5e] font-poppins text-2xl">No Route</p>
            </div>
          </div>
          <div>
            <div className="pl-10 pr-16 pb-5 pt-10 bg-[#F2ECFF] shadow-[0_0_5px_rgba(152,128,234,0.7)] max-h-[80vh] overflow-y-scroll">
              <ul className="list-none p-0">
                <hr className="ml-5 w-full border-[#967DF9] border-[1px]" />
                <li className="border-l-[2px] border-indigo-500 p-[10px] relative m-0 before:content-['\2022'] before:font-[#000] before:text-[36px] before:absolute before:left-[-8px] before:translate-y-[-70%]">
                  <div>
                    <h5 className={`${styles.heading5}`}>Packing</h5>
                    <div>
                      <FontAwesomeIcon icon={faCircleCheck} /> Goods are loaded
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCircleUser} /> Packer Name
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faLocationCrosshairs} /> Alamat
                      Gudang
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faClock} /> 10 April 2024
                    </div>
                  </div>
                </li>
                <hr className="ml-5 w-full border-[#967DF9] border-[1px]" />
                <li className="max-w-[176px] border-l-[2px] border-indigo-500 p-[10px] relative m-0 before:content-['\2022'] before:font-[#000] before:text-[36px]  before:absolute before:left-[-8px] before:translate-y-[-70%]">
                  <div>
                    <h5 className={`${styles.heading5}`}>Pick up</h5>
                    <div>
                      <FontAwesomeIcon icon={faCircleCheck} /> Picked up
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCircleUser} /> Driver Name
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faLocationCrosshairs} /> Alamat
                      Gudang
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faClock} /> 10 April 2024
                    </div>
                  </div>
                </li>
                <hr className="ml-5 w-full border-[#967DF9] border-[1px]" />
                {shipment.orders_id.map((order_id, index) => {
                  let order = orders.find((order) => order.id === order_id)
                  let customer = customers.find(
                    (customer) => customer.id === order.customer_id
                  )
                  if (
                    order.status === 'Delivered' &&
                    index === shipment.orders_id.length - 1
                  ) {
                    isShipmentFinished = true
                  }

                  console.log(order, customer)
                  const activeStyle = 'border-l-[2px] border-indigo-500'
                  return (
                    <React.Fragment key={order.id}>
                      <li
                        className={`${
                          order.status === 'Delivered' ? activeStyle : ''
                        } max-w-[176px] p-[10px] relative m-0 before:content-['\\2022'] before:font-[#000] before:text-[36px] before:absolute before:left-[-8px] before:translate-y-[-70%]`}
                      >
                        <div>
                          <h5 className={`${styles.heading5}`}>
                            Order {order.id}
                          </h5>
                          <div className="truncate">
                            <FontAwesomeIcon icon={faCircleCheck} />{' '}
                            {order.status}
                          </div>
                          <div className="truncate">
                            <FontAwesomeIcon icon={faCircleUser} />{' '}
                            {customer.name}
                          </div>
                          <div className="truncate">
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
                <li
                  className={`${
                    isShipmentFinished ? styles.shipmentFinished : ''
                  } max-w-[176px] p-[10px] border-l-2 border-transparent relative m-0 before:z-10 before:content-['\\2022'] before:font-[#000] before:text-[36px] before:absolute before:left-[-8px] before:translate-y-[-70%]`}
                >
                  <div>
                    <h5 className={`${styles.heading5}`}>Warehouse</h5>
                    <div>
                      <FontAwesomeIcon icon={faCircleCheck} /> Delivered
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faCircleUser} /> Driver Name
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faLocationCrosshairs} /> Alamat
                      Gudang
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
      </div>
    </div>
  )
}

export default ShipmentDetail
