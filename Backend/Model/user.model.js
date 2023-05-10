const mongoose = require("mongoose")

// --------------->>>>>>>> User Schema <<<<<<<<-------------------

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: Object,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    order: {
        type: Object,
        required: true
    }
})

// --------------->>>>>>>> UserModel <<<<<<<<-------------------


const UserModel = mongoose.model("users",userSchema)

module.exports = {UserModel}