import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from '../../../styles/style'

const StatCard = ({ title, value, style }) => (
  <div
    className={`${style} bg-[#F2ECFF] flex-1 rounded-md h-[120px] flex justify-between flex-col relative p-3 pt-5 mt-4`}
  >
    <FontAwesomeIcon className="absolute top-0 right-0 text-[28px] m-2" />
    <div>
      <p className={`${styles.paragraph} !text-[#ACA7CB]`}>{title}</p>
      <h4 className={`${styles.heading4} !text-[#474554]`}>{value}</h4>
    </div>
  </div>
)

export default StatCard
