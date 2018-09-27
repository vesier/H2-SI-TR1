//Menu Hamburger

const menu = document.querySelector('.hamburger')
menu.addEventListener('click', ()=>{
  menu.classList.toggle('isActive')
  document.querySelector('.navbar').classList.toggle('hidden')
  document.querySelector('.socialMedia').classList.toggle('hidden')
  document.querySelector('.topPageTitle').classList.toggle('hidden')
})

//Arrow Animation

window.onload = setTimeout(()=>{
  document.querySelector('.arrow').classList.remove('hidden')
  window.onload = document.querySelector('.presentationMenu').classList.remove('hidden')
}, 800)

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

//FAQ Animation
function toggle_div(bouton, id) {
  var div = document.getElementById(id);
  if(div.style.display=="none") {
    div.style.display = "block";
    bouton.innerHTML = "-";
  } else {
    div.style.display = "none";
    bouton.innerHTML = "+";
  }
}
