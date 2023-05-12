require('dotenv').config()
const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb://localhost:27017/purplle")
module.exports = {connection}