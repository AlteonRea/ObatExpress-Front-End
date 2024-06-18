import React from 'react'
import styles from '../../../styles/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'

const RoleCard = ({
  role,
  responsibility,
  textColor,
  borderColor,
  paragraphTextColor,
  onClick,
}) => {
  return (
    <div
      className={`${borderColor} 
      border-2 p-2 flex flex-row items-center cursor-pointer rounded-md mr-10
      hover:shadow-[0_0_25px_rgba(128,131,255,1)] flex-1
      `}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faCircleDot}
        className={`px-7 text-[24px] ${textColor}`}
      />
      <div>
        <h4 className={`${styles.heading42} ${textColor}`}>{role}</h4>
        <p className={`font-normal ${paragraphTextColor}`}>{responsibility}</p>
      </div>
    </div>
  )
}

export default RoleCard
