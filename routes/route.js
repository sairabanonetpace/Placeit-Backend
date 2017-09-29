var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// /* User List service */
// router.get('/users', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   var service = require("../web_services/user/users");
//   var responseObject = service();
//   res.send(responseObject);
// });

// /* User Retrieve service */
// router.get('/user/:id', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   var service = require("../web_services/user/user");
//   var responseObject = service(req.params.id);
//   res.send(responseObject);
// });

/* Tenant service */
router.get('/tenant/:tenantName', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var service = require("../web_services/tenant/tenant");
  service(req.params.tenantName,res);
});

/* User Login service */
router.post('/user/login', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  var service = require("../web_services/login/login");
  service(req.body , res);
});


module.exports = router;
