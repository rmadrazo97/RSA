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
    var start = false
    while(!start){
        if(num1 == num2){
            start = true
        }else{
            num2 = prime_numbers()
        }
    }
    return num1 * num2
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


console.log("n:"+find_n())
console.log(gcd(123,276))
console.log(lcm(123,276))