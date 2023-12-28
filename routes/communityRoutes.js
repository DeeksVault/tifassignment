const express = require('express');
const communityRouter = express.Router();
const {createCommunity , getAllCommunities , getMyOwnedCommunity , getMyJoinedCommunity ,getAllMembers} = require('../controllers/communityController')
const { authenticate } = require('../middleware/auth');


communityRouter.post('/', authenticate, createCommunity)
communityRouter.get('/', authenticate, getAllCommunities)
communityRouter.get('/me/owner', authenticate, getMyOwnedCommunity)
communityRouter.get('/me/member', authenticate, getMyJoinedCommunity)
communityRouter.get('/:id/member', authenticate, getAllMembers)


module.exports = communityRouter;