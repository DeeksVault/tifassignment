const jwt = require('jsonwebtoken');
const { User } = require('../models/userModel');


const authenticate = async (req , res , next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token , process.env.JWT_TOKEN);
        const user = await User.findById(decoded.userId);
        if (!user) {
            throw new Error();
        }

        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports =  authenticate 