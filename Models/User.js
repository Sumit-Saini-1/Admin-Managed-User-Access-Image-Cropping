const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true,
    },
    name:String,
    password: {
        type: String,
        required: true
    },
    photo:String,
    accepted:{
        type:String,
        default:'N'
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;