import React from 'react'
import { vehicles } from '../../constants'
const Vehicles = () => {
  const vehiclesCount = vehicles.length

  const renderCardRow = () => {
    var indents = []
    for (var i = 0; i < Math.ceil(vehiclesCount / 4); i++) {
      let currentVehicles = vehicles.slice(i * 4, (i + 1) * 4)
      indents.push(
        <div className="flex flex-row justify-between mb-2" key={i}>
          {currentVehicles.map((vehicle) => (
            <div
              className="w-[24%] py-4 px-3 bg-[#FAF8ff] rounded-md"
              key={vehicle.id}
            >
              <div className="flex flex-row justify-between">
                <div className="font-poppins font-[500]">
                  Vehicle
                  <span className="font-semibold"> #{vehicle.id}</span>
                </div>
                <div className="font-poppins font-semibold text-[green]">
                  {vehicle.status}
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex-[40%] flex flex-col">
                  <div>
                    <div className="text-[#5e5e5e] text-[14px]">
                      Shipment ID
                    </div>
                    <div className="font-poppins font-semibold">1</div>
                  </div>
                  <div>
                    <div className="text-[#5e5e5e] text-[14px]">
                      Weight (KG)
                    </div>
                    <div className="font-poppins font-semibold">
                      {vehicle.weight}/{vehicle.capacity}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#5e5e5e] text-[14px]">Capacity</div>
                    <div className="font-poppins font-semibold text-[red]">
                      {((vehicle.weight / vehicle.capacity) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
                <div className="flex-[60%] flex items-center justify-center">
                  <img src={vehicle.imgUrl} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    }
    return indents
  }

  return (
    <div>
      <div className="py-[20px] px-10">
        <div className="flex flex-row items-center">
          <h4 className="font-poppins font-semibold text-[24px]">Vehicles</h4>
          <div className="flex flex-row ml-2">
            <div className="bg-[#E3E0F3] hover:bg-[#8083FF] rounded-md mx-2 p-2 text-[14px] text-[#8685EF] w-[100px] text-center font-semibold hover:text-[#fff] cursor-pointer">
              Idle
            </div>
            <div className="bg-[#E3E0F3] hover:bg-[#8083FF] rounded-md mx-2 p-2 text-[14px] text-[#8685EF] w-[100px] text-center font-semibold hover:text-[#fff] cursor-pointer">
              Ready
            </div>
            <div className="bg-[#E3E0F3] hover:bg-[#8083FF] rounded-md mx-2 p-2 text-[14px] text-[#8685EF] w-[100px] text-center font-semibold hover:text-[#fff] cursor-pointer">
              On Delivery
            </div>
            <div className="bg-[#E3E0F3] hover:bg-[#8083FF] rounded-md mx-2 p-2 text-[14px] text-[#8685EF] w-[100px] text-center font-semibold hover:text-[#fff] cursor-pointer">
              Maintenance
            </div>
          </div>
        </div>
        <div className="mt-10">{renderCardRow()}</div>
      </div>
    </div>
  )
}

export default Vehicles
