const User = require('../models/user')
const jwt = require('jsonwebtoken')

const addUser = async (req, res) => {
    const { name, username, email, password } = req.body;
    const user = new User ({
        name,
        username,
        email,
        password,
    })
    user.password = await user.encryptPass(user.password);

    user.save()
    .then(data => res.status(201).json({msg: 'User created', data}))
    .catch((error) => res.status(500).json({error}));
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email})
    if (!user) {
        return res.status(404).json({msg: 'Non-existent user'});
    }

    if(!await user.validatePass(password)){
        return res.status(401).json({auth: false, token: null, msg: 'Invalid password'});
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_KEY, {expiresIn: 600})
    const updatedUser = await User.findOneAndUpdate({email},{token},{new: true});
    return res.status(200).json({auth: true, msg: 'User logged', token})
}

module.exports = { addUser, loginUser };