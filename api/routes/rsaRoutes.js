'use strict';
module.exports = function(app) {
  var rsa = require('../controllers/rsaController');

  // todoList Routes
  app.route('/getKey')
    .get(rsa.get_key)


  app.route('/verifyKey')
    .get(rsa.verify_key)
    // post? 
};
