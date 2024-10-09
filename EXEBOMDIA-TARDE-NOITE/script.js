function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutes = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minutes} minutos!<br>`
    if (hora >= 0 && hora < 12){
        //Bom Dia
        msg.innerText += ' Bom Dia! Seja Feliz.'
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        //Boa Tarde
        msg.innerText += ' Boa Tarde! Sorria!'
        img.src = 'fototarde.png'
        document.body.style.background = '#b16a2a'
    } else {
        //Boa Noite
        msg.innerText += ' Boa Noite! Bom descanso.'
        img.src = 'fotonoite.png'
        document.body.style.background = '#20203e'
    }
}


