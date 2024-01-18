function carregar() {
    var msg = window.document.getElementById('msg')
    var saldacao = window.document.getElementById('saldac')
    var img = window.document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    
    msg.innerHTML = (`Agora são ${hora} hora(s)`)
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'Manhã.png'
        document.body.style.background = '#eddfc2'
        saldacao.innerHTML = ('Bom dia!')
    }else if(hora >=12 && hora < 18) {
        //Boa Tarde
        img.src = 'Tarde.png'
        document.body.style.background = '#df9e5f'
        saldacao.innerHTML = 'Boa tarde!'
    }else {
        //Boa noite
        img.src = 'Noite.png'
        document.body.style.background = '#10161b'
        saldacao.innerHTML = 'Boa Noite!'
    }
}
