const express = require('express');
const roleRouter = express.Router();
const {createRole , getAllRole} = require('../controllers/roleController');


roleRouter.post('/' , createRole);
roleRouter.get('/' , getAllRole);


module.exports = roleRouter;