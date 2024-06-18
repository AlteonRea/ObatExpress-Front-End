/* eslint-disable no-undef */
/* eslint-disable no-redeclare */

// Note: fetch data containerSize, packData based on pathId
import React, { useEffect, useRef } from 'react'
import { containerSize, packData } from '../../../constants/pack'
import styles from '../../../styles/style'
import { useParams } from 'react-router-dom'
const RenderPlotly = () => {
  const containerElem = useRef(null)
  const { id } = useParams()

  // Ensure plotly has been loaded
  useEffect(() => {
    // function to import plotly
    const importPlotly = async () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = 'https://cdn.plot.ly/plotly-2.27.0.min.js'
        script.charset = 'utf-8'
        script.async = true
        script.onload = () => resolve()
        script.onerror = () => reject(new Error('Failed to load Plotly script'))

        document.head.appendChild(script)
      })
    }

    const handleLoadData = async () => {
      await importPlotly()
      containerElem.current.innerHTML = ''

      const boxPos = [0, 0, 0]
      const boxSize = [
        containerSize[0].size_x,
        containerSize[0].size_y,
        containerSize[0].size_z,
      ]

      let itemPosList = []
      let itemSizeList = []
      let productCodeList = []
      packData.forEach((item) => {
        itemPosList.push([item.pos_x, item.pos_y, item.pos_z])
        itemSizeList.push([item.size_x, item.size_y, item.size_z])
        productCodeList.push(item.product_code)
      })

      generateAnim(boxPos, boxSize, itemPosList, itemSizeList, productCodeList)
    }

    handleLoadData()
  })

  function generateAnim(
    boxPos,
    boxSize,
    itemPosList,
    itemSizeList,
    productCodeList
  ) {
    function getCubeEdges(pos, size) {
      var x1 = [pos[0], pos[0] + size[0], pos[0] + size[0], pos[0]]
      var y1 = [pos[1], pos[1], pos[1] + size[1], pos[1] + size[1]]
      var z1 = [pos[2], pos[2], pos[2], pos[2]]

      var x2 = [pos[0], pos[0], pos[0], pos[0]]
      var y2 = [pos[1], pos[1], pos[1] + size[1], pos[1] + size[1]]
      var z2 = [pos[2], pos[2] + size[2], pos[2] + size[2], pos[2]]

      var x3 = [pos[0], pos[0] + size[0], pos[0] + size[0]]
      var y3 = [pos[1] + size[1], pos[1] + size[1], pos[1] + size[1]]
      var z3 = [pos[2] + size[2], pos[2] + size[2], pos[2]]

      var x4 = [pos[0] + size[0], pos[0] + size[0], pos[0] + size[0]]
      var y4 = [pos[1] + size[1], pos[1], pos[1]]
      var z4 = [pos[2] + size[2], pos[2] + size[2], pos[2]]

      var x5 = [pos[0] + size[0], pos[0]]
      var y5 = [pos[1], pos[1]]
      var z5 = [pos[2] + size[2], pos[2] + size[2]]

      var x = x1.concat(x2, x3, x4, x5)
      var y = y1.concat(y2, y3, y4, y5)
      var z = z1.concat(z2, z3, z4, z5)
      return [x, y, z]
    }

    function getEdgesImg(pos, size, color) {
      var [boxX, boxY, boxZ] = getCubeEdges(pos, size)
      var box_img = {
        type: 'scatter3d',
        mode: 'lines',
        x: boxX,
        y: boxY,
        z: boxZ,
        line: {
          width: 6,
          color: color,
          reversescale: false,
        },
      }
      return box_img
    }

    function getCubeMesh(pos, size) {
      var meshX = [
        pos[0],
        pos[0],
        pos[0] + size[0],
        pos[0] + size[0],
        pos[0],
        pos[0],
        pos[0] + size[0],
        pos[0] + size[0],
      ]
      var meshY = [
        pos[1],
        pos[1] + size[1],
        pos[1] + size[1],
        pos[1],
        pos[1],
        pos[1] + size[1],
        pos[1] + size[1],
        pos[1],
      ]
      var meshZ = [
        pos[2],
        pos[2],
        pos[2],
        pos[2],
        pos[2] + size[2],
        pos[2] + size[2],
        pos[2] + size[2],
        pos[2] + size[2],
      ]
      return [meshX, meshY, meshZ]
    }

    function getMeshImg(pos, size, color) {
      var [meshX, meshY, meshZ] = getCubeMesh(pos, size)
      let img = {
        type: 'mesh3d',
        x: meshX,
        y: meshY,
        z: meshZ,
        i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
        j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
        k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
        color: color,
      }
      return img
    }

    function drawBox(
      boxPos,
      boxSize,
      itemPosList,
      itemSizeList,
      lastItemIdx,
      divName,
      leftContainerDiv,
      productCodeList,
      rightContainerDiv
    ) {
      var plotlyData = []
      var box_img = getEdgesImg(boxPos, boxSize, 'red')

      // CREATE BUTTON CONTAINER
      const buttonContainer = document.createElement('div')
      buttonContainer.classList.add(
        'w-[800px]',
        'flex',
        'items-center',
        'justify-center'
      )

      // CREATE PREV NEXT BUTTON
      const leftButton = document.createElement('button')
      leftButton.textContent = '<'
      leftButton.classList.add(
        'bg-[#007bff]',
        'text-white',
        'border-none',
        'py-[10px]',
        'px-[20px]',
        'cursor-pointer',
        'mr-2'
      )

      const rightButton = document.createElement('button')
      rightButton.textContent = '>'
      rightButton.classList.add(
        'bg-[#007bff]',
        'text-white',
        'border-none',
        'py-[10px]',
        'px-[20px]',
        'cursor-pointer',
        'mr-2'
      )

      // CREATE FIRST INDEX BUTTON AND LAST INDEX BUTTON
      const firstButton = document.createElement('button')
      firstButton.textContent = '<<'
      firstButton.classList.add(
        'bg-[#007bff]',
        'text-white',
        'border-none',
        'py-[10px]',
        'px-[20px]',
        'cursor-pointer',
        'mr-2'
      )

      const lastButton = document.createElement('button')
      lastButton.textContent = '>>'
      lastButton.classList.add(
        'bg-[#007bff]',
        'text-white',
        'border-none',
        'py-[10px]',
        'px-[20px]',
        'cursor-pointer',
        'mr-2'
      )

      // CREATE SEARCH INDEX BY INPUT
      const form = document.createElement('form')

      const inputNumber = document.createElement('input')
      inputNumber.type = 'number'
      inputNumber.min = 0
      inputNumber.step = 1
      inputNumber.value = lastItemIdx
      inputNumber.classList.add('form-control', 'mr-2')

      //console.log(productCodeList);
      const table = document.createElement('table')
      table.classList.add('table', 'table-striped', 'table-bordered')

      const thead = document.createElement('thead')
      thead.innerHTML = `<th scope = "col">Number</th> <th scope = "col">Product Code</th>`

      const tbody = document.createElement('tbody')

      productCodeList.forEach((code, index) => {
        const row = document.createElement('tr')
        row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${code}</td>
                    `
        tbody.appendChild(row)
      })

      table.appendChild(thead)
      table.appendChild(tbody)

      rightContainerDiv.appendChild(table)
      form.appendChild(inputNumber)

      buttonContainer.appendChild(firstButton)
      buttonContainer.appendChild(leftButton)
      buttonContainer.appendChild(form)
      buttonContainer.appendChild(rightButton)
      buttonContainer.appendChild(lastButton)

      leftContainerDiv.appendChild(buttonContainer)

      function updateInputValue() {
        inputNumber.value = lastItemIdx
      }
      // EVENT HANDLER FOR BUTTONS
      leftButton.addEventListener('click', () => {
        if (lastItemIdx > 0) {
          lastItemIdx--
          updateInputValue()
          updatePlot()
        }
      })

      rightButton.addEventListener('click', () => {
        if (lastItemIdx < itemPosList.length - 1) {
          lastItemIdx++
          updateInputValue()
          updatePlot()
        }
      })

      firstButton.addEventListener('click', () => {
        lastItemIdx = 0
        updateInputValue()
        updatePlot()
      })

      lastButton.addEventListener('click', () => {
        lastItemIdx = itemPosList.length - 1
        updateInputValue()
        updatePlot()
      })

      form.addEventListener('submit', (event) => {
        event.preventDefault()
        let inputValue = parseInt(inputNumber.value)
        // console.log(inputValue)
        // console.log(inputNumber.value)
        if (!isNaN(inputValue)) {
          if (inputValue < 0) inputValue = 0
          else if (inputValue > itemPosList.length - 1)
            inputValue = itemPosList.length - 1
          lastItemIdx = inputValue
          updateInputValue()
          updatePlot()
        }
      })

      inputNumber.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()
          form.dispatchEvent(new Event('submit'))
        }
      })

      function updatePlot() {
        plotlyData = [box_img]

        for (let i = 0; i < lastItemIdx; i++) {
          var item_img = getMeshImg(itemPosList[i], itemSizeList[i], 'grey')
          var item_edge_img = getEdgesImg(
            itemPosList[i],
            itemSizeList[i],
            'black'
          )
          plotlyData = plotlyData.concat([item_img, item_edge_img])
        }

        if (lastItemIdx < itemPosList.length) {
          var item_img = getMeshImg(
            itemPosList[lastItemIdx],
            itemSizeList[lastItemIdx],
            'blue'
          )
          var item_edge_img = getEdgesImg(
            itemPosList[lastItemIdx],
            itemSizeList[lastItemIdx],
            'black'
          )
          plotlyData = plotlyData.concat([item_img, item_edge_img])
        }

        Plotly.newPlot(divName, plotlyData, {})
      }
      updatePlot()
    }
    const innerContainer = document.createElement('div')
    innerContainer.classList.add(
      'w-full',
      'h-[90vh]',
      'flex',
      'flex-row',
      'p-[10px]',
      'mb-[20px]',
      'shadow-lg'
    )

    const leftContainer = document.createElement('div')
    leftContainer.classList.add(
      'flex',
      'flex-col',
      'items-center',
      'p-[20px]',
      'w-full',
      'h-full'
    )

    const rightContainer = document.createElement('div')
    rightContainer.classList.add(
      'h-full',
      'w-full',
      'flex',
      'justify-center',
      'overflow-y-scroll'
    )

    const myDiv = document.createElement('div')
    myDiv.classList.add('h-[90vh]', 'w-[1200px]')

    leftContainer.appendChild(myDiv)

    innerContainer.appendChild(leftContainer)
    innerContainer.appendChild(rightContainer)

    containerElem.current.appendChild(innerContainer)
    drawBox(
      boxPos,
      boxSize,
      itemPosList,
      itemSizeList,
      0,
      myDiv,
      leftContainer,
      productCodeList,
      rightContainer
    )
  }

  return (
    <div>
      <header>
        <h4 className={`${styles.heading4} mt-7 !text-[#474554]`}>
          Shipment #{id}
        </h4>
      </header>
      <div id="container" ref={containerElem} className="p-[20px]"></div>
    </div>
  )
}

export default RenderPlotly

/* eslint-enable no-undef */
