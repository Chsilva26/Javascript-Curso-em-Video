function gerar() {
    var num = window.document.getElementById("txtnum")
    var tab = window.document.getElementById("seltab")
    

    if (num.value.length == 0) {
        window.alert('!Digite um valor!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text =`${n} x ${c} = ${n * c}`
            tab.value = `tab${c}`
            tab.appendChild(item)
            c ++
        }
    }
}