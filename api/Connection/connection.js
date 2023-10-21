require('dotenv').config()
const mongoose = require("mongoose")
// const connection = mongoose.connect("mongodb://localhost:27017/purplle")
const connection = mongoose.connect(process.env.url)
module.exports = {connection}