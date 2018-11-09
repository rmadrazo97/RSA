'use strict';
module.exports = function(app) {
  var rsa = require('../controllers/rsaController');

  // todoList Routes
  app.route('/getKey')
    .get(rsa.get_keys)

  app.route('/encrypt')
    .get(rsa.encrypt)
  
  app.route('/decrypt')
    .get(rsa.decrypt)

  app.route('/verifyKey')
    .get(rsa.verify_key)
    // post? 
};
