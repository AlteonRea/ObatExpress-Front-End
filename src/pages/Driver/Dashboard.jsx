import React, { Component } from 'react'
import '../../styles/index.scss'
import styles from '../../styles/style'
import {
  driverStats,
  driverPersonalInfo,
  driverRecentDeliveries,
} from '../../constants'
import { StatCard } from './components'
import useImage from '../../common/UseImage'

const Dashboard = () => {
  const { loading, error, image } = useImage(driverPersonalInfo[0].img)
  if (error) return <p>Image not Found</p>
  return (
    <div className="p-4 px-10">
      <div>
        <h4 className={`${styles.heading4} mt-7 !text-[#474554]`}>Dashboard</h4>
        <div className="flex justify-between">
          {driverStats.map((stat, index) => (
            <StatCard
              key={stat.id}
              {...stat}
              style={`${index !== driverStats.length - 1 ? 'mr-5' : 'mr-0'}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-row">
        <div className="bg-[#f2ecff] py-4 rounded-lg w-full">
          <h4 className={`${styles.heading4} !text-[#474554] my-2 px-6`}>
            Recent Deliveries
          </h4>
          <table className="w-full">
            <thead className="bg-[#ACA7CB]">
              <tr className="h-[40px]">
                <th className="text-center pr-3">ID</th>
                <th className="text-left">Date</th>
                <th className="text-left">Total Recipients</th>
                <th className="text-left">Distance</th>
                <th className="text-left">Weight</th>
              </tr>
            </thead>
            <tbody className="">
              {driverRecentDeliveries.map((data, index) => {
                return (
                  <React.Fragment key={data.id}>
                    <tr
                      className={`${
                        index % 2 === 1 ? 'bg-[#DBD5E8]' : ''
                      } h-[40px]`}
                    >
                      <td className="text-center pr-3">{data.id}</td>
                      <td className="text-left">{data.date}</td>
                      <td className="text-left">
                        {data.totalRecipients} Customers
                      </td>
                      <td className="text-left">{data.totalKm} KM</td>
                      <td className="text-left">{data.totalWeight} KG</td>
                    </tr>
                  </React.Fragment>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
