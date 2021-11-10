
var express     = require('express');
var router      = express.Router();
var controller  = require('./controller-customer');

router.post('/customer', controller.create);

router.get('/customer', controller.findAll);

router.get('/customer/:id', controller.findOne);

router.delete('/customer/:id', controller.delete);

router.put('/customer/:id',  controller.update);

module.exports = router;