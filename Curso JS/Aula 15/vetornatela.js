let valores = [43,5,23,7,9,42,99]
let v = valores.sort()
pos = 0
/*for(let pos=0;pos < valores.length;pos++) {
    console.log(`Posição: ${pos} Valor: ${valores[pos]}`)
}
*/

for(pos in v) {
    console.log(`Posição: ${pos} Valor: ${v[pos]}`)
}