Xo = (new Date()).getTime() / 1000;
// console.log(parseInt(Xo))
a = 1103515245
c = 12345
m = 32768

lim1 = 1
lim2 = 75
numeros = (lim2-lim1)+1
total = []
repetido = false
cantidad = 0
iteraciones = 0
stringCant = String(numeros)
len = stringCant.length
// console.log(len)
base = Math.pow(10,len+1)
// console.log(base)

while(cantidad<numeros){
    Xn = (a*Xo + c) % m
    aleatorio = Xn/m
    Xo = parseInt(Xn)
    Entero = Math.round(aleatorio*base)
    repetido = total.includes(Entero)
    if(!repetido){
        if(Entero >= lim1 && Entero<= lim2){
            total.push(Entero)
            cantidad = cantidad+1
        }
        iteraciones = iteraciones+1
    }
}

console.log("Posibilidades: ", total)

function juega(pArray) {

    // console.log("Vamos a juga")

    let index = 0;
    let numero;

    for(index; index <= pArray.length; index++) {

        console.log("La balota encontrada es: ", pArray[index])
        numero = pArray[index]
        pArray.shift()
        break
    }

    if(pArray.length === 0) {

        console.log("Fin de juego")
        const boton = document.getElementById('prueba');
        boton.disabled = true;
        boton.style.backgroundColor = '#F00A0A';
        boton.style.color = '#d8d0ce';
        boton.style.borderColor = '#fff';
    }

    let divBalota = document.querySelector('#balota');
    divBalota.textContent = numero

}