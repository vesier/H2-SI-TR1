//Menu hamburger

const menu = document.querySelector('.hamburger')
menu.addEventListener('click', ()=>{
  menu.classList.toggle('is-active')
  document.querySelector('.navbar').classList.toggle('hidden')
  document.querySelector('.socialMedia').classList.toggle('hidden')
  document.querySelector('.topPageTitle').classList.toggle('hidden')
})

//Arrow animation

// let upArrowPosition = upArrow.getBoundingClientRect()
// let downArrowPosition = downArrow.getBoundingClientRect()
// const upArrow = document.querySelector('.upArrow'), downArrow = document.querySelector('.downArrow'), direction = -1
// function arrowAnimation(){
//   if () {
//
//   }
// }
// intervalID = window.setInterval(arrowAnimation, 100)





//Title Animation

const titleA = ['S','t','e','r','k','a',' ','M','1',':','<br/>','T','h','e',' ','M','o','d','u','l','a','r',' ','D','I','Y',' ','P','e','d','e','l','e','c',' ','B','i','k','e',' ','K','i','t']
let text = [], txt = '', nb_msg = titleA.length-1, actual_text = 0
for (let i=0; i<titleA.length; i++) {
  text[i] = txt+titleA[i]
  txt = text[i]
}
window.onload = changeMessage()
function changeMessage(){
  console.log(text[actual_text])
  document.querySelector('.topPageTitle').innerHTML = text[actual_text]
  actual_text++
  if(actual_text >= text.length){
    return
  }
  setTimeout("changeMessage()",7)
}
