
let form = document.querySelector('.formulario')
let mascara =document.querySelector('.mascara-formulario')


function cliqueiNoBotao() {
    form.style.left = '40%'
    mascara.style.visibility = 'visible'
    
}

function esconder(){
    form.style.left = '-270px'
    form.style.transform = 'tranlateX(0)'
    mascara.style.visibility = 'hidden' 
}

