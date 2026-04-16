const resetBtn = document.querySelector('#resetBtn')
const inputs = document.getElementsByName('color')

inputs.forEach((el) => {
  el.addEventListener('click', () => {
    if (el.checked) {
      resetBtn.style.display = 'block'
      resetBtn.classList.add('open')
    }
  })
})

resetBtn.addEventListener('click', () => {
  resetBtn.classList.remove('open')
})
