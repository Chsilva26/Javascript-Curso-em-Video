let amigos = {
    nome:'Carlos', 
    idade:'21',
    sexo:'Masculino',
    peso:'85.5',
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }

}
amigos.engordar(5)
console.log(`${amigos.nome} pesa:${amigos.peso}kg`)
