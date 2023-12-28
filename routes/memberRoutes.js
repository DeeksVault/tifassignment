const express = require('express');
const memberRouter = express.Router();
const {addMember , deleteMember} = require('../controllers/memberController');
const { authenticate } = require('../middleware/auth');


memberRouter.post('/', authenticate, addMember)
memberRouter.delete('/:id/community/:cid', authenticate, deleteMember)


module.exports = memberRouter;