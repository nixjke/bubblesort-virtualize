import './style.css'

async function bubbleSort() {
  let bars = document.querySelectorAll('.bar')
  let len = bars.length

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      let bar1 = bars[j]
      let bar2 = bars[j + 1]

      if (parseInt(bar1.style.height) > parseInt(bar2.style.height)) {
        let temp = bar1.style.height

        bar1.style.transform = 'translateX(50px)'
        bar2.style.transform = 'translateX(-50px)'
        await new Promise(resolve => setTimeout(resolve, 500))

        bar1.style.transition = 'all 0.5s ease'
        bar2.style.transition = 'all 0.5s ease'
        bar1.style.height = bar2.style.height
        bar2.style.height = temp

        await new Promise(resolve => setTimeout(resolve, 500))
        bar1.style.transform = 'none'
        bar2.style.transform = 'none'

        let bar1Value = parseInt(bar1.style.height)
        let bar2Value = parseInt(bar2.style.height)
        bar1.innerText = bar1Value
        bar2.innerText = bar2Value
      }

      await new Promise(resolve => setTimeout(resolve, 50))
    }
  }
}

function generateArray(size, min, max) {
  let array = []

  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1)) + min)
  }

  return array
}

function createBars(array) {
  let container = document.getElementById('container')

  for (let i = 0; i < array.length; i++) {
    let bar = document.createElement('div')
    bar.style.height = array[i] + '%'
    bar.className = 'bar'
    let value = document.createElement('span')
    value.innerText = array[i]
    bar.appendChild(value)
    container.appendChild(bar)
  }
}

let array = generateArray(20, 1, 100)
createBars(array)

const button = document.getElementById('button')

button.addEventListener('click', bubbleSort)
