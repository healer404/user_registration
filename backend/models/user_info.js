const mongoose = require("mongoose");

const UserInfoSchema = mongoose.Schema({
    fname: {
        type: String,
        trim: true,
        required: true
    },
    lname: {
        type: String,
        trim: true,
        required: true
    },
    mname: {
        type: String,
        trim: true
    },
    age: {
        type: Number,
        trim: true,
        required: true
    },
    sex: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        validate(value){
            if(!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)){
                throw new Error('Email is invalid.');
            }
        }
    }
});

module.exports = mongoose.model("UserSchema", UserInfoSchema);