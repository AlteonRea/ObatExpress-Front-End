import React from 'react'
import { driverPersonalInfo } from '../../constants'
import useImage from '../../common/UseImage'
import styles from '../../styles/style'

const Profile = () => {
  const { loading, error, image } = useImage(driverPersonalInfo[0].img)
  if (error) return <p>Image not Found</p>
  return (
    <div className="bg-[#F2ECFF] flex flex-col w-[30%] rounded-md px-6 py-4">
      <h4 className={`${styles.heading4} my-2 !text-[#474554]`}>
        Personal Information
      </h4>
      <div className="flex flex-row w-full">
        <div className="flex-1">
          {loading ? (
            <p>loading</p>
          ) : (
            <img src={image} alt="Image not found" className="h-[189px]" />
          )}
        </div>
        <div className="flex-1">
          <div className="mb-3">
            <label className="text-[#ACA7CB]">First Name</label>
            <p className={`text-[18px] text-[#474554] font-semibold`}>
              {driverPersonalInfo[0].firstName}
            </p>
          </div>
          <div className="mb-3">
            <label className="text-[#ACA7CB]">Last Name</label>
            <p className={`text-[18px] text-[#474554] font-semibold`}>
              {driverPersonalInfo[0].lastName}
            </p>
          </div>
          <div className="mb-3">
            <label className="text-[#ACA7CB]">Gender</label>
            <p className={`text-[18px] text-[#474554] font-semibold`}>
              {driverPersonalInfo[0].gender}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full mb-3">
          <div className="flex-1">
            <label className="text-[#ACA7CB]">Birthday</label>
            <p className={`text-[18px] text-[#474554] font-semibold`}>
              {driverPersonalInfo[0].birthday}
            </p>
          </div>
          <div className="flex-1">
            <label className="text-[#ACA7CB]">Birthday</label>
            <p className={`text-[18px] text-[#474554] font-semibold`}>
              {driverPersonalInfo[0].birthday}
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full mb-3">
          <div className="flex-1">
            <label className="text-[#ACA7CB]">Employment Date</label>
            <p className={`text-[18px] text-[#474554] font-semibold`}>
              {driverPersonalInfo[0].employmentDate}
            </p>
          </div>
          <div className="flex-1">
            <label className="text-[#ACA7CB]">Employment Type</label>
            <p className={`text-[18px] text-[#474554] font-semibold`}>
              {driverPersonalInfo[0].employmentType}
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full mb-3">
          <div className="flex-1">
            <label className="text-[#ACA7CB]">Email</label>
            <p className={`text-[18px] text-[#474554] font-semibold`}>
              {driverPersonalInfo[0].email}
            </p>
          </div>
          <div className="flex-1">
            <label className="text-[#ACA7CB]">Phone</label>
            <p className={`text-[18px] text-[#474554] font-semibold`}>
              {driverPersonalInfo[0].phone}
            </p>
          </div>
        </div>
        <label className="text-[#ACA7CB]">Address</label>
        <p className={`text-[18px] text-[#474554] font-semibold`}>
          {driverPersonalInfo[0].address}
        </p>
      </div>
    </div>
  )
}

export default Profile
