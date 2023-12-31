const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minLength: [3, "userName To short"],
        maxLength: 32,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 32,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 300,
        trim: true
    },
    picture: {
        type: String
    }
},{timestamps: true})
const userModel = mongoose.model("user", userSchema)
module.exports = userModel