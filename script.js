const changeImg = document.getElementById('monkey')
const titulo = document.getElementById('titulo')

changeImg.addEventListener('mouseover', naoVejo)
changeImg.addEventListener('mouseleave',naoOuco)
changeImg.addEventListener('click',naoFalo)



function naoVejo(){
     changeImg.src = './img/maoolhos.png'
     titulo.innerText = 'Vejo nada...'

}
function naoFalo(){
     changeImg.src = './img/maoboca.png'
     titulo.innerText = 'Falo nada...'

}

function naoOuco(){
     changeImg.src = './img/maoorelha.png'
     titulo.innerText = 'Ouço nada...'

}