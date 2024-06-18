import React from 'react'
import '../../styles/index.scss'
import styles from '../../styles/style'

const Report = () => {
  return (
    <div className="flex justify-center mt-[4.25rem]">
      <div className="bg-[#F2ECFF] rounded-md px-0 py-4 w-[650px]">
        <form>
          <div className="px-6">
            <h4 className={`${styles.heading4} my-2 !text-[#474554]`}>
              Driver Report
            </h4>
            <label htmlFor="issueDescription">
              Please describe the issue you are experiencing:
            </label>
            <textarea
              id="issueDescription"
              name="issueDescription"
              rows="4"
              className="w-full border-[#2C3345] border-[1px] rounded px-4 py-1"
              required
            ></textarea>
            <div className="flex flex-col my-[20px]">
              <label htmlFor="driverID">Date & Time:</label>
              <div className="flex flex-row">
                <div className="flex-1 pr-[10px]">
                  <input
                    type="date"
                    id="driverID"
                    name="driverID"
                    className="border-[#2C3345] border-[1px] w-full rounded leading-[36px] px-4"
                    required
                  />
                </div>

                <div className="flex-1 pl-[10px] flex items-center">
                  <input
                    type="time"
                    placeholder="HH:MM"
                    className="border-[#2C3345] border-[1px] rounded mr-[10px] leading-[36px] px-4"
                    required
                  />
                  <select className="border-[#2C3345] border-[1px] rounded leading-[40px] h-[40px] px-4">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[50%] pr-[10px]">
              <label htmlFor="">Location</label>
              <input
                type="text"
                className="border-[#2C3345] border-[1px] rounded leading-[36px] px-4"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col my-[20px]">
              <label htmlFor="">What is your name?</label>
              <div className="flex flex-row">
                <div className="flex-1 pr-[10px]">
                  <input
                    type="text"
                    className="border-[#2C3345] border-[1px] rounded w-full leading-[36px] px-4"
                    name=""
                    id=""
                    disabled
                    placeholder="John"
                  />
                  <p className="text-[#2C3345] text-[12px]">First Name</p>
                </div>
                <div className="flex-1 pl-[10px]">
                  <input
                    type="text"
                    className="border-[#2C3345] border-[1px] rounded w-full leading-[36px] px-4"
                    name=""
                    id=""
                    disabled
                    placeholder="Smith"
                  />
                  <p className="text-[#2C3345] text-[12px]">Last Name</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row my-[20px]">
              <div className="flex-1 pr-[10px]">
                <label htmlFor="">What is your email address?</label>
                <input
                  type="email"
                  className="border-[#2C3345] border-[1px] rounded w-full leading-[36px] px-4"
                  name=""
                  id=""
                  disabled
                  placeholder="JohnS@gmail.com"
                />
                <p className="text-[#2C3345] text-[12px]">
                  example@example.com
                </p>
              </div>
              <div className="flex-1 pl-[10px]">
                <label htmlFor="">What is your phone number?</label>
                <input
                  type="text"
                  className="border-[#2C3345] border-[1px] rounded w-full leading-[36px] px-4"
                  name=""
                  id=""
                  disabled
                  placeholder="81271139285"
                />
                <p className="text-[#2C3345] text-[12px]">
                  Please enter a valid phone number
                </p>
              </div>
            </div>
          </div>

          <hr className="border-[#2C3345] mt-[20px]" />
          <div className="flex justify-center py-[30px] w-full">
            <button
              type="submit"
              class="w-[80%] relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-poppins text-md font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <span class="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#f2ecff] rounded-md group-hover:bg-opacity-0">
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Report
