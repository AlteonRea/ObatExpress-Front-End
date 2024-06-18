import React from 'react'
import '../../styles/index.scss'
import { StatCard, DeliveryReport } from './components'
import styles from '../../styles/style'
import { dashboard_stats } from '../../constants'
import { deliveryStatus, shipments, employees } from '../../constants'
const dashboard = () => {
  return (
    <div>
      <div className="p-[10px] px-10">
        <h4 className={`${styles.heading4} mt-7 !text-[#474554]`}>
          Shipment Data
        </h4>
        <div className="flex justify-between">
          {dashboard_stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              {...stat}
              style={`${
                index !== dashboard_stats.length - 1 ? 'mr-5' : 'mr-0'
              }`}
            />
          ))}
        </div>
        <DeliveryReport
          title="Shipment List"
          deliveryStatus={deliveryStatus}
          shipments={shipments}
          employees={employees}
        />
      </div>
    </div>
  )
}

export default dashboard
