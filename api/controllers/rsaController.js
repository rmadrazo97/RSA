'use strict';
var http = require('http');
var rsa = require('./rsa.js');

exports.get_keys = function(req,res){
    var n = rsa.find_n();
    var e = rsa.find_e(n[0],n[1])
    var d = rsa.find_d(e)
    var respuesta = {P: n[0], Q: n[1], N: n[2], E: e[0], D:d}
    //
    res.json(respuesta)
};

exports.encrypt = function(req,res){
    //getting n and d
    var n = rsa.find_n();
    var e = rsa.find_e(n[0],n[1])
    var phrase = req.params.frase1
    var secret = []
    var asciichar = ""
    for(var i = 0; i<=phrase.length-1; i ++){
        //leyendo caracter por caracter
        var char = phrase.charAt(i);
        // encriptando el caracter leido desde ascii.
        asciichar = rsa.enc(n[2],e[0],char.charCodeAt(0))

        // convirtiendo a unicode: 
        //var encchar = String.fromCharCode(asciichar);

        //agregando a la frase secreta uno por uno
        //secret += encchar.toString();
        secret[i] = asciichar
    }
    console.log(secret)
    var result = {Frase: phrase, Secreto: secret, N: n, E:e[0], phi:e[1]}
    res.json(result)
}

exports.decrypt = function(req,res){
    var secret = [512000, 328509, 474552, 328509]
    var e = [3, 26438360] 
    var d = rsa.find_d(e)
    var n = 52891303
    var resultado = []
    secret.forEach((element) => {
        var yes = String.fromCharCode(rsa.dec(element, d, n))
        resultado.push(yes)
    })
    // variables que vienen ya. 
    res.json({Frase: resultado})
}

exports.verify_key = function(req,res){
    res.json({x:true})
};