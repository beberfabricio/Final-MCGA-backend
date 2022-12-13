const { Schema, model} = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    token:{
        type: String,
    }
})

userSchema.methods.encryptPass = async function (password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

userSchema.methods.validatePass = function (password) {
    return bcrypt.compare(password, this.password);
}

module.exports = model("Users", userSchema, "usersFinal");