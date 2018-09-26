//Menu Hamburger

const menu = document.querySelector('.hamburger')
menu.addEventListener('click', ()=>{
  menu.classList.toggle('isActive')
  document.querySelector('.navbar').classList.toggle('hidden')
  document.querySelector('.socialMedia').classList.toggle('hidden')
  document.querySelector('.topPageTitle').classList.toggle('hidden')
  if(menu.classList.contains('isActive')){
    displayMenu()
  }else{
    deleteMenu()
  }
})

//Arrow Animation

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
  document.querySelector('.topPageTitle').innerHTML = text[actual_text]
  actual_text++
  if(actual_text >= text.length){
    return
  }
  setTimeout('changeMessage()',7)
}


//Nav Menu Animation
let list = ['About our Company', 'Dynamic Visual Mod', 'The Sterka M1', 'Frequently asked Questions', 'Contact Us']
let txtList = ''
const menuSelector = document.querySelectorAll('.navbar ul li')

for (let i = 0; i < list.length; i++) {
  list[i]=list[i].split('')
}

function displayMenu(){
  for (let i = 0; i < list.length; i++) {
    txtList=''
    for (let j = 0; j < list[i].length; j++) {
      txtList = txtList + list[i][j]
      menuSelector[i].innerHTML = txtList
    }
  }
}


function deleteMenu(){
  for (let i = 0; i < menuSelector.length; i++) {
    while (menuSelector[i].firstChild) menuSelector[i].removeChild(menuSelector[i].firstChild);
  }
}
