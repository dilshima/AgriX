const User = require('../models/user'); // Corrected import statement
const bcrypt = require('bcrypt');   
const jwt = require('jsonwebtoken');

const loginController = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Incorrect Password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in: ', error);
        res.status(500).json({ message: 'Login failed' });
    }
};



const signupController = async (req, res) => {
    const { username, address, phonenumber, email, password } = req.body;

    if (!username || !address || !phonenumber || !email || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            address,
            phonenumber,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.log('signing up: ', error);
        res.status(500).json({ message: 'Signup failed' });
    }
};

module.exports = { loginController, signupController};
