const express = require('express');
const connectDB = require('./config/dbConnection');
const userRoutes = require('./routes/userRoutes');
const communityRoutes = require('./routes/communityRoutes');
const roleRoutes = require('./routes/roleRoutes');
const memberRoutes = require('./routes/memberRoutes')
const cors = require("cors");

connectDB();

const app = express();
app.use(cors());

// const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/v1/auth' , userRoutes);
app.use('/v1/community' , communityRoutes);
app.use('/v1/role' , roleRoutes);
app.use('/v1/member' , memberRoutes);

app.listen(5000 , ()=>{
    console.log(`server is running at port 5000`);
})