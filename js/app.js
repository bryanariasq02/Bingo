Xo = (new Date()).getTime() / 1000;
console.log(parseInt(Xo))
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
console.log(len)
base = Math.pow(10,len+1)
console.log(base)

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

// let prueba = (Math.floor(Math.random() * total.length));
// let balota = total[prueba]

// console.log("La balota lanzada es: ", balota)



function juega(pArray) {
    // let inicio = 1;
    // let fin = 75;

    // let balota = (inicio + Math.floor(Math.random() * fin))
    // console.log("La balota lanzada es: ", balota)
    console.log("Vamos a juga")
    console.log(pArray);

    pArray.forEach(element => {
        console.log("La balota lanzada es: ", element)
    });
}