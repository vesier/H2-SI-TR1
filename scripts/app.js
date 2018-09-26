//Menu Hamburger

const menu = document.querySelector('.hamburger')
menu.addEventListener('click', ()=>{
  menu.classList.toggle('isActive')
  document.querySelector('.navbar').classList.toggle('hidden')
  document.querySelector('.socialMedia').classList.toggle('hidden')
  document.querySelector('.topPageTitle').classList.toggle('hidden')
})

//Arrow Animation

window.onload = setTimeout(()=>{document.querySelector('.arrow').classList.remove('hidden')}, 800)

//Title Animation

const titleA = ['T','h','e',' ','m','o','s','t',' ','p','o','w','e','r','f','u','l',' ','a','n','d',' ','m','o','d','u','l','a','r',',','<br/>','b','u','i','l','d','-','i','t','-','y','o','u','r','s','e','l','f',' ','e','-','b','i','k','e',',',' ','y','o','u','<br/>','c','a','n',' ','c','u','s','t','o','m','i','z','e',' ','a','n','d',' ','b','u','i','l','d','.']
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
