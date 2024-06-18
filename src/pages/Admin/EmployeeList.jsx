import React, { useState, useRef } from 'react'
import {
  faUserTie,
  faBoxesPacking,
  faPersonChalkboard,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/style'
import { employees, jobRoles, workTypes } from '../../constants'
import pfp from '../../assets/ProfilePhotos/pfp.png'
import '../../styles/index.scss'
const EmployeeList = () => {
  const employeeCounts = [
    { id: 1, title: 'Total', icon: faUserTie, count: 51 },
    {
      id: 2,
      title: 'Admin',
      icon: faUserTie,
      count: 3,
    },
    {
      id: 3,
      title: 'Driver',
      icon: faPersonChalkboard,
      count: 30,
    },
    {
      id: 4,
      title: 'Packer',
      icon: faBoxesPacking,
      count: 18,
    },
  ]

  const [activeRole, setActiveRole] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeDetail, setActiveDetail] = useState(null)
  const [filteredEmployeesData, setFilteredEmployeesData] = useState([])
  const [searchValue, setSearchValue] = useState(null)
  const itemsPerPage = 20
  const lastItemIndex = itemsPerPage * currentPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  let currentEmployeesData = useRef([])
  const filterEmployeesData = (role) => {
    return employees.filter((item) => item.job_id === jobRoles.id)
  }
  const handleListClick = (index) => {
    setActiveRole(index)
    firstPage()
  }

  const firstPage = () => {
    setCurrentPage(1)
  }
  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }
  const lastPage = () => {
    setCurrentPage(lastPageNumber)
  }
  const handleInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  if (searchValue) {
    const foundEmployee = employees.find(
      (employee) => employee.id === parseInt(searchValue, 10)
    )
    currentEmployeesData.current = foundEmployee ? [foundEmployee] : []
  } else {
    currentEmployeesData.current = filteredEmployeesData.slice(
      firstItemIndex,
      lastItemIndex
    )
  }

  if (activeRole === 0) {
    setFilteredEmployeesData(employees)
    setActiveRole(3)
  } else if (activeRole === 1 || activeRole === 2) {
    const role = jobRoles.find((role) => role.id === activeRole)
    const filteredData = filterEmployeesData(role)
    setFilteredEmployeesData(filteredData)
    setActiveRole(3)
  }

  const lastPageNumber = Math.ceil(filteredEmployeesData.length / 20)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="relative p-[10px] px-10">
      <h3>Employee List</h3>
      <div className="flex flex-row justify-between w-full">
        {employeeCounts.map((item, index) => (
          <div
            key={index}
            className="mr-10 bg-[#F2ECFF] flex-1 rounded-md h-[150px] flex items-center flex-row relative px-10"
          >
            <div className="text-[28px]">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <div className="ml-10">
              <h3 className={`${styles.heading42}`}>{item.title}</h3>
              <p className={`${styles.paragraph} !text-[#474554]`}>
                {item.count}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <h3 className={`${styles.heading4} !text-[#474554]`}>Employees</h3>
        <div className="flex flex-row items-center justify-between mt-5">
          <ul className="flex flex-row">
            {[{ id: 0, role: 'All Employees' }, ...jobRoles].map(
              (item, index) => (
                <li
                  key={index}
                  className={`${
                    index === activeRole
                      ? 'border-b-[#8083FF] text-[#8083FF]'
                      : 'border-b-[#6B7280] text-[#5e5e5e] '
                  } font-medium px-7 border-b-2 hover:cursor-pointer`}
                  onClick={() => handleListClick(index)}
                >
                  {item.role}
                </li>
              )
            )}
          </ul>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              placeholder="Search Employee ID"
              className="font-medium border-2 rounded-full px-4 py-1 outline-none"
            />
          </form>
        </div>
        <div className="bg-[#f2ecff] m-4 rounded-lg">
          <table className="w-full">
            <thead className="bg-[#ACA7CB]">
              <tr>
                <th className="pr-3">ID</th>
                <th className="text-left">Name</th>
                <th className="text-left">Email</th>
                <th className="text-left">Role</th>
                <th className="text-left">Type</th>
              </tr>
            </thead>
            <tbody className="">
              {currentEmployeesData.current.map((employee) => {
                const roleInfo = jobRoles.find(
                  (role) => role.id === employee.job_id
                )
                const employmentTypeInfo = workTypes.find(
                  (workType) => workType.id === employee.employement_id
                )

                return (
                  <React.Fragment key={employee.id}>
                    <tr
                      className="h-[40px]"
                      onClick={() =>
                        setActiveDetail(
                          activeDetail === employee.id ? null : employee.id
                        )
                      }
                    >
                      <th className="pr-3">{employee.id}</th>
                      <th className="text-left">{employee.name}</th>
                      <th className="text-left">{employee.email}</th>
                      <th className="text-left">{roleInfo.role}</th>
                      <th className="text-left">{employmentTypeInfo.type}</th>
                    </tr>
                    <tr
                      className={`bg-[#FFF5FF] ${
                        employee.id === activeDetail ? 'expand-row' : 'hidden'
                      }`}
                    >
                      <td colSpan="5">
                        <div
                          className={`${
                            employee.id === activeDetail ? '' : 'hidden'
                          } flex flex-row w-full justify-between items-center p-4 border-l border-r border-x-[#FFE8F7] `}
                        >
                          <div className="h-[120px]">
                            <img src={pfp} alt="" className="w-full h-full" />
                          </div>
                          <div className="flex flex-col w-1/5">
                            <div className=" flex flex-col">
                              <label
                                className={`${styles.employeeDetailLabel}`}
                              >
                                Full Name
                              </label>
                              <span className={`${styles.employeeDetailSpan}`}>
                                {employee.name}
                              </span>
                            </div>
                            <div className=" flex flex-col mt-4">
                              <label
                                className={`${styles.employeeDetailLabel}`}
                              >
                                Email Address
                              </label>
                              <span className={`${styles.employeeDetailSpan}`}>
                                {employee.email}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col w-1/5">
                            <div className=" flex flex-col">
                              <label
                                className={`${styles.employeeDetailLabel}`}
                              >
                                Job Roles
                              </label>
                              <span className={`${styles.employeeDetailSpan}`}>
                                {roleInfo.role}
                              </span>
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className={`${styles.employeeDetailLabel}`}
                              >
                                Employment Type
                              </label>
                              <span className={`${styles.employeeDetailSpan}`}>
                                {employmentTypeInfo.type}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col w-2/5">
                            <div className="flex flex-row justify-between">
                              <div className="flex flex-col">
                                <label
                                  className={`${styles.employeeDetailLabel}`}
                                >
                                  Gender
                                </label>
                                <span
                                  className={`${styles.employeeDetailSpan}`}
                                >
                                  {employee.gender}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <label
                                  className={`${styles.employeeDetailLabel}`}
                                >
                                  Age
                                </label>
                                <span
                                  className={`${styles.employeeDetailSpan}`}
                                >
                                  {employee.age}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <label
                                  className={`${styles.employeeDetailLabel}`}
                                >
                                  Phone Number
                                </label>
                                <span
                                  className={`${styles.employeeDetailSpan}`}
                                >
                                  {employee.phone}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col mt-4">
                              <label
                                className={`${styles.employeeDetailLabel}`}
                              >
                                Address
                              </label>
                              <span className={`${styles.employeeDetailSpan}`}>
                                {employee.address}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
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

export default EmployeeList
