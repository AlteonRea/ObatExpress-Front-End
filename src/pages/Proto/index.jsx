import React, { useState } from 'react'

// Define your shipmentIdList
export const shipmentIdList = [
  { id: 1 },
  { id: 2 },
  // Add more items as needed
]

// CustomSelect component
const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (id) => {
    setSelectedId(id)
    setIsOpen(false) // Close the dropdown after selection (optional)
    // Add your logic here based on the selected ID
  }

  return (
    <div className="custom-select">
      <div className="selected-item inline-block" onClick={toggleDropdown}>
        {selectedId ? (
          <React.Fragment>
            Selected ID:
            <div className="extra-content">
              {/* Content inside the selected text */}
              {selectedId}
            </div>
          </React.Fragment>
        ) : (
          'Select Shipment ID'
        )}
      </div>
      {isOpen && (
        <div className="dropdown">
          {shipmentIdList.map((item) => (
            <div
              key={item.id}
              className="dropdown-item"
              onClick={() => handleSelect(item.id)}
            >
              {item.id}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomSelect
