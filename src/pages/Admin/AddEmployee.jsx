import React, { useState } from 'react'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/style'
import { jobRoles, workTypes } from '../../constants'
import RoleCard from './components/RoleCard'
import pfp from '../../assets/ProfilePhotos/pfp.png'

const AddEmployee = () => {
  const [activeRole, setActiveRole] = useState(null)
  const [activeType, setActiveType] = useState(null)

  const handleRoleCardClick = (index) => {
    setActiveRole(index === activeRole ? null : index)
  }

  const handleTypeCardClick = (index) => {
    setActiveType(index === activeType ? null : index)
  }

  return (
    <div className="p-[10px] px-10">
      <h3 className={`${styles.heading4} !text-[32px] mt-7 !text-[#474554]`}>
        Add Employee
      </h3>
      <h2 className={`${styles.heading4} !text-[#5e5e5e] mt-7`}>
        Choose Employee Role
      </h2>
      <div>
        <div className="flex flex-row mt-5 justify-center ">
          {jobRoles.map((item, index) => (
            <RoleCard
              key={item.id}
              {...item}
              textColor={
                activeRole === index ? 'text-[#8083ff]' : 'text-[#3b3b3b]'
              }
              borderColor={
                activeRole === index ? 'border-[#8083ff]' : 'border-[#D6F4FF]'
              }
              paragraphTextColor={
                activeRole === index ? 'text-[#474554]' : 'text-[#5e5e5e]'
              }
              onClick={() => handleRoleCardClick(index)}
            />
          ))}
        </div>
        <div className="flex flex-row mt-5 justify-center ">
          {workTypes.map((item, index) => (
            <RoleCard
              key={item.id}
              role={item.type}
              responsibility={item.responsibility}
              textColor={
                activeType === index ? 'text-[#8083ff]' : 'text-[#3b3b3b]'
              }
              borderColor={
                activeType === index ? 'border-[#8083ff]' : 'border-[#D6F4FF]'
              }
              paragraphTextColor={
                activeType === index ? 'text-[#474554]' : 'text-[#5e5e5e]'
              }
              onClick={() => handleTypeCardClick(index)}
            />
          ))}
        </div>
      </div>
      <h4 className={`${styles.heading4} !text-[#474554] mt-7`}>
        Enter Employee Data
      </h4>
      <form action="" className="text-[22px] text-black">
        <div className="flex flex-col mt-3">
          <div className="flex-[20%] flex flex-row ">
            <div className={`${styles.formItem} flex-[50%] pr-5`}>
              <span>Name</span>
              <input
                className={`${styles.employeeInputForm}`}
                type="text"
                name=""
                id=""
                placeholder="Raka Satya Prasasta"
              />
            </div>
            <div className={`${styles.formItem} flex-[50%]`}>
              <span>Address</span>
              <input
                className={`${styles.employeeInputForm}`}
                type="text"
                name=""
                id=""
                placeholder="Jl. Krebet No.8"
              />
            </div>
          </div>
          <div className="flex-[80%] flex flex-row ">
            <div className="flex-1 flex flex-row ">
              <div className="w-[240px] ">
                <span>Picture</span>
                <img src={pfp} alt="" className="border-2" />
              </div>
              <div className="flex flex-col w-full px-5">
                <div className={`${styles.formItem}  h-[50%]`}>
                  <span>Birth Day</span>
                  <input
                    className={`${styles.employeeInputForm}`}
                    type="date"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-row w-full  h-[50%]">
                  <div className={`${styles.formItem} flex-[60%] `}>
                    <span>Language</span>
                    <select
                      className={`${styles.employeeInputForm}`}
                      name=""
                      id=""
                    >
                      <option value="">English</option>
                      <option value="">Indonesian</option>
                    </select>
                  </div>
                  <div className={`${styles.formItem} flex-[30%] ml-5 `}>
                    <span>Gender</span>
                    <select
                      className={`${styles.employeeInputForm}`}
                      name=""
                      id=""
                    >
                      <option value="">Male</option>
                      <option value="">Female</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col ">
              <div className={`${styles.formItem} h-[50%]`}>
                <span>Phone Number</span>
                <input
                  className={`${styles.employeeInputForm}`}
                  type="text"
                  name=""
                  id=""
                  placeholder="+62 812-7113-9285"
                />
              </div>
              <div className="flex flex-row h-[50%]">
                <div className={`${styles.formItem} flex-[60%] `}>
                  <span>Email</span>
                  <input
                    className={`${styles.employeeInputForm}`}
                    type="email"
                    name=""
                    id=""
                    placeholder="alterea85@gmail.com"
                  />
                </div>
                <div className={`${styles.formItem} ml-5 flex-[30%] `}>
                  <span>Nationality</span>
                  <select
                    name=""
                    id=""
                    className={`${styles.employeeInputForm}`}
                  >
                    <option value="">Indonesia</option>
                    <option value="">Malaysia</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddEmployee
