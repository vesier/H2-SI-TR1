//Menu Hamburger

const menu = document.querySelector('.hamburger')
menu.addEventListener('click', ()=>{
  hamburgerAction()
})

function hamburgerAction(){
  menu.classList.toggle('isActive')
  document.querySelector('html').classList.toggle('scrollBlock')
  document.querySelector('.navbar').classList.toggle('hidden')
  document.querySelector('.socialMedia').classList.toggle('hidden')
  document.querySelector('.topPageTitle').classList.toggle('hidden')
}
//Arrow Animation

const arrow = document.querySelector('.arrow')
window.onload = setTimeout(()=>{
  arrow.classList.remove('hidden')
  window.onload = document.querySelector('.presentationMenu').classList.remove('hidden')
}, 800)

arrow.addEventListener('click', ()=>{
  if (menu.classList.contains('isActive')) {
    hamburgerAction()
  }
  window.scroll({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });
})


//Title Animation

const titleA = 'The most powerful and modular, build-it-yourself e-bike, you can customize and build.'.split('')
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
  setTimeout('changeMessage()',13)
}
