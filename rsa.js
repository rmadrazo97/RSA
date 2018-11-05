const primality = require("primality")

var prime_numbers = () => {
    var start = false 
    while(!start){
        var numero = Math.floor(Math.random() * 10000) + 1000
        if(primality(numero)){
            start = true
        }
    }
    return numero
}

var find_n = () => {
    var num1 = prime_numbers()
    var num2 = prime_numbers() 
    console.log(num1)
    console.log(num2)
    var start = false
    while(!start){
        if(num1 != num2){
            start = true
        }else{
            num2 = prime_numbers()
        }
    }
    var respuesta = [num1, num2, num1 * num2]
    return respuesta
}

var gcd = (a,b) => {
    var x = a
    var y = b 
    while(y != 0){
        var r = x % y 
        x = y 
        y = r 
    }
    return x 
}

var lcm = (a,b) => {
    return (a * b) / gcd(a,b)
}

var find_e = (p,q) => {
    var phi = lcm(p - 1, q - 1)
    for(var i = 2; i < phi; i ++){
        if(gcd(i, phi) == 1){
            return i
        }
    }
}

var prueba = find_n()
var e = find_e(prueba[0], prueba[1])
console.log(prueba)
console.log(e)
console.log(gcd(e, prueba[0] - 1))
console.log(gcd(e, prueba[1] - 1))