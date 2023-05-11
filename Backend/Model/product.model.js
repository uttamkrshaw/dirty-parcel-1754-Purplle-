const mongoose = require("mongoose")
const productschema = mongoose.Schema({
    brand:String,
    name:String,
    price:String,
    image_link:String,
    description:String,
    category:String,
    product_type:String,
    tag_list:Array
})

const ProductModel = mongoose.model("products",productschema)

module.exports = {ProductModel}