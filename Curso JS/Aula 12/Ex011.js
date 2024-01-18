var idade = 72

if(idade < 16) {
    console.log(`Idade: ${idade} anos`)
    console.log('Não vota')
} else if(idade >= 16 && idade < 18 || idade > 65){
    console.log(`Idade: ${idade}`)
    console.log('Vota Opicionalmente')
} else if(idade >= 18) {
    console.log(`Idade: ${idade}`)
    console.log(`Voto Obrigatório`)
}