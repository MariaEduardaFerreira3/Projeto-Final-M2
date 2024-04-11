const logoDark = document.getElementById('logoDark');

luz = true

logoDark.addEventListener('click', () => {
    
    if(luz === luz){
        window.location.href = ('http://127.0.0.1:5500/Projeto-Final-M2/HTML/firstPage.html')
    }else{
        window.location.href = ('http://127.0.0.1:5500/Projeto-Final-M2/HTML/firstDark.html')
        
    }
    })