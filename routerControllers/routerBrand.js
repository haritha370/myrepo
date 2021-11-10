
var express     = require('express');
var router      = express.Router();
var controller  = require('./controller-brand');

router.post('/brand', controller.create);

router.get('/brand', controller.findAll);

router.get('/brand/:id', controller.findOne);

router.delete('/brand/:id', controller.delete);

router.put('/brand/:id',  controller.update);

module.exports = router;