function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
  
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'bebe-m.png')
            } else if(idade <21) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }

        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'bebe-f.png')
            }else if(idade <21){
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}