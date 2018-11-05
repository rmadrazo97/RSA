const primality = require("primality");
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
            var ephi = [i,phi]
            return ephi
        }
    }
}


var find_d = (arreglo) => {
    var e = arreglo[0]
    var phi = arreglo[1]
    for(var i = 2; i<phi; i ++){
        if(e*i%phi == 1){
            return i
        }
    }
}

var encrypt = (n,e,m)=>{
    var c = (m^e)%n
    console.log(c)
}

// b=base
// n=exponente
// m=modulo
var expon = (b, n, m) => {
    n = n.toString(2)
    x = 1 
    power = b % m 
    for(var i = (n.length - 1); i >= 0; i --){
        if(n.charAt(i) == 1){
            x = (x * power) % m 
        }
        power = (power * power) % m 
    }
    return x 
}

//------
// n = [p,q,p*q]
var n = find_n();
console.log('n: '+n)

// e es coprimo (p-1),(q-1)
var e = find_e(n[0],n[1])
console.log('e: '+e)

// d-> private key
var d = find_d(e)
console.log('d: '+d)
console.log((d*e[0])%e[1])

// 
