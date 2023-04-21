const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    roll:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    role:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
});
const User = mongoose.model('user123', UserSchema);
User.createIndexes();
module.exports = User;