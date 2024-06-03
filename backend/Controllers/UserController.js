const User = require('../models/User');
const bcrypt = require('bcryptjs');

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to Home Page");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // bcrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user with hashed password
    user = await User.create({ name, email, password: hashedPassword });

    // Generate JWT token
    const token = await user.generateToken();

    res.status(201).json({msg:user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const userLogin = async (req, res) => {
  try {
    //1. request to body
    //2. check if user exists
    //3. compare password
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = await user.generateToken();

    res.json({msg:'Sign In successfully', token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { home, registerUser, userLogin };
