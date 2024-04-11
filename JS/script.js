
const logoClara = document.getElementById('logoClara');


let luz = true

logoClara.addEventListener('click', () => {
if(luz === luz){
    window.location.assign ('http://127.0.0.1:5500/Projeto-Final-M2/HTML/firstDark.html')
}else{
    window.location.href = ('http://127.0.0.1:5500/Projeto-Final-M2/HTML/firstPage.html')

}

})

logoDark.addEventListener('click', () => {
    
    if(luz === luz){
        window.location.href = ('http://127.0.0.1:5500/Projeto-Final-M2/HTML/firstDark.html')
    }else{
        window.location.href = ('http://127.0.0.1:5500/Projeto-Final-M2/HTML/firstPage.html')
    
    }
    })