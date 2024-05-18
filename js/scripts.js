const cars = document.querySelectorAll('.car')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const indicators = document.querySelector('.inidcators')
const bullets = document.querySelectorAll('.bullets span')

let active = 0
let firstActive = 0
let lastActive = cars.length - 1

const setSlider = () => {
  document.querySelector('.car.active').classList.remove('active')
  document.querySelector('.bullets .active').classList.remove('active')
  document.querySelector('.number').textContent = `0${active + 1}`
  bullets[active].classList.add('active')
  cars[active].classList.add('active')
}

prevBtn.addEventListener('click', () => {
  document.body.style.setProperty('--calculation', -1)
  active = active - 1 < firstActive ? lastActive : active - 1
  setSlider()
})

nextBtn.addEventListener('click', () => {
  document.body.style.setProperty('--calculation', 1)
  active = active + 1 > lastActive ? 0 : active + 1
  setSlider()
})
