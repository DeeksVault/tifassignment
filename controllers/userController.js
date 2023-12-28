const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function signUp(req , res){
    const {name , email , password} = req.body;

    if(name.length < 2 || password.length<6 || name==null || email==null || password==null){
        return res.status(400).json({error:'validation error'});
    }

    const existingUser = await User.findOne({email});

    if(existingUser){
        return res.status().json({error:'Email already exists'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        name,
        email,
        password: hashedPassword,
    });

    await user.save();

    const accessToken = jwt.sign({ email: user.email }, process.env.JWT_TOKEN, { expiresIn: '1h' });
    res.status(201).json({ meta: { access_token: accessToken } });
}

async function signIn(req, res) {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
  
    const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_TOKEN);
  
    res.json({
      meta: {
        access_token: accessToken,
      },
    });
  }


  async function getMe(req, res){
    const user = req.user.toObject();
    delete user.password;
  
    res.json({ data: user });
  }
  
  
  module.exports = { signUp, signIn, getMe };