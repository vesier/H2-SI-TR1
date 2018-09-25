//Menu hamburger
const menu = document.querySelector('.hamburger')
menu.addEventListener('click', ()=>{
  menu.classList.toggle('is-active')
})

//Arrow animation
let upArrowPosition = upArrow.getBoundingClientRect()
let downArrowPosition = downArrow.getBoundingClientRect()
const upArrow = document.querySelector('.upArrow'), downArrow = document.querySelector('.downArrow'), direction = -1
function arrowAnimation(){
  if () {

  }
}
intervalID = window.setInterval(arrowAnimation, 100)
