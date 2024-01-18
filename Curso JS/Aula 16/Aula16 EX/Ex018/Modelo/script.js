let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#sellst')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
    
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
   
function add() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já existe!')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0) {
        window.alert('Sem valores para finalizar')
    } else {
        let totv = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            for(let pos in valores) {
                if(valores[pos] < menor){
                    menor = valores[pos]
                }
            }
        }
        media = soma/valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>${totv} Valores Adicionados.</p>`
        res.innerHTML += `<p>Maior valor = ${maior}.</p>`
        res.innerHTML += `<p>Menor valor = ${menor}.</p>`
        res.innerHTML += `<p>Soma de todos os valores = ${soma}.</p>`
        res.innerHTML += `<p>Media de todos os valores = ${media}.</p>`
        

    }
}




