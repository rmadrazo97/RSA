'use strict';
var http = require('http');


exports.get_key = function(req,res){
        res.json({q:5,p:4})
};

exports.verify_key = function(req,res){
    res.json({x:true})
};