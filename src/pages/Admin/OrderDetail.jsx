import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styles from '../../styles/style'
import './OrderDetail.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserGear,
  faTruckRampBox,
  faTruck,
  faCreditCard,
  faBoxOpen,
  faEnvelope,
  faUser,
  faLocationArrow,
  faPhone,
  faIdCard,
} from '@fortawesome/free-solid-svg-icons'

import { orders, items } from '../../constants'
const OrderDetail = () => {
  let { id } = useParams()
  const numericId = parseInt(id, 10)
  let order = orders.find((order) => order.id === numericId)
  let totalPrice = 0
  return (
    <div>
      <div className="p-[10px] px-10">
        <div className="card">
          <div className="flex-row flex justify-between pt-10 px-10">
            <div className="flex">
              <h4 className={`${styles.heading42} `}>
                Order ID #{order.id}
                <NavLink
                  to={`/admin/shipment/1`}
                  className="ml-4 text-[#5e5e5e] !text-[16px] cursor-pointer hover:text-[#007bff]"
                >
                  (Shipment #1)
                </NavLink>
              </h4>
            </div>
            <div className="flex flex-col">
              <p className="mb-0">
                Expected Arrival <span className="font-bold">{order.ETA}</span>
              </p>
              <p>
                USPS <span className="font-bold">2482184721847124</span>
              </p>
            </div>
          </div>
          <div className="flex-row flex justify-center">
            <div className="w-full">
              <ul id="progressbar" className="text-center w-full">
                <li className="active step0"></li>
                <li className="active step0"></li>
                <li className="active step0"></li>
                <li className="active step0"></li>
                <li className="step0"></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex-row flex flex-1 justify-center">
              <div className="flex flex-col text-center">
                <FontAwesomeIcon icon={faUserGear} className="text-[24px]" />
                <p className="font-bold mt-2">Processing</p>
              </div>
            </div>
            <div className="flex-row flex flex-1 justify-center">
              <div className="flex flex-col text-center">
                <FontAwesomeIcon icon={faCreditCard} className="text-[24px]" />
                <p className="font-bold mt-2">Confirmed</p>
              </div>
            </div>
            <div className="flex-row flex flex-1 justify-center">
              <div className="flex flex-col text-center">
                <FontAwesomeIcon
                  icon={faTruckRampBox}
                  className="text-[24px]"
                />
                <p className="font-bold mt-2">Preparation</p>
              </div>
            </div>
            <div className="flex-row flex flex-1 justify-center">
              <div className="flex flex-col text-center">
                <FontAwesomeIcon icon={faTruck} className="text-[24px]" />
                <p className="font-bold mt-2">On Delivery</p>
              </div>
            </div>
            <div className="flex-row flex flex-1 justify-center">
              <div className="flex flex-col text-center">
                <FontAwesomeIcon icon={faBoxOpen} className="text-[24px]" />
                <p className="font-bold mt-2">Delivered</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mx-auto mt-8 justify-between">
          <div className="bg-[#F2ECFF] rounded-lg flex-1 mr-10 py-[20px] px-[40px] font-poppins max-h-[50vh] overflow-y-scroll">
            <h4 className={`${styles.heading42}`}>Item List</h4>
            {order.items_id.map((item_id) => {
              const item = items.find((item) => item.id === item_id)
              totalPrice += item.price
              return (
                <React.Fragment key={item_id}>
                  <div className="flex flex-row justify-between h-[80px] items-center">
                    <div>{item.name}</div>
                    <div className="flex flex-row w-[30%] justify-between">
                      <div>
                        <p>
                          1x <span>{item.price} (IDR)</span>
                        </p>
                      </div>
                      <div>{item.price * 2} (IDR)</div>
                    </div>
                  </div>
                  <hr className="border-[#967Df9] border-[1px]" />
                </React.Fragment>
              )
            })}

            <div className="w-full flex justify-end mt-4">
              <div className="w-[30%]">
                <p className="flex justify-between">
                  Product Total <span>{totalPrice} (IDR)</span>
                </p>
                <p className="flex justify-between">
                  Shipping Cost <span>FREE</span>
                </p>
                <hr className="border-[#967DF9] border-[1px] my-4" />
                <p className="flex justify-between">
                  Total <span>$900.00</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-[20%] font-poppins flex flex-col info-card justify-between">
            <div className="bg-[#F2ECFF] p-[20px] rounded-sm">
              <h5 className={`${styles.heading5}`}>Order Details</h5>
              <hr className="border-[#967DF9] border-[1px]" />
              <div className="my-2 truncate">
                <FontAwesomeIcon icon={faUser} />
                <span>Raka Satya Prasasta</span>
              </div>
              <div className="my-2 truncate">
                <FontAwesomeIcon icon={faTruck} />
                <span>Mobil-Box</span>
              </div>
              <div className="my-2 truncate">
                <FontAwesomeIcon icon={faIdCard} />
                <span>NRK 1902 K</span>
              </div>
            </div>

            <div className="bg-[#F2ECFF] p-[20px] rounded-sm">
              <h5 className={`${styles.heading5}`}>Customer Details</h5>
              <hr className="border-[#967DF9] border-[1px]" />
              <div className="my-2 truncate">
                <FontAwesomeIcon icon={faUser} />
                <span>Raka Satya Prasasta</span>
              </div>
              <div className="my-2 truncate">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>rakasatria85@gmail.com</span>
              </div>
              <div className="my-2 truncate">
                <FontAwesomeIcon icon={faPhone} />
                <span>+62 812-7113-9285</span>
              </div>
              <div className="my-2 truncate">
                <FontAwesomeIcon icon={faLocationArrow} />
                <span>
                  Jl. Krebet no.8 sendang sari pajangan bantul yogyakarta
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail
