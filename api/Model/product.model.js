const mongoose = require("mongoose")

// --------------->>>>>>>> Product Schema <<<<<<<<-------------------

const productschema = mongoose.Schema({
    brand: String,
    name: String,
    price: String,
    image_link: String,
    description: String,
    category: String,
    product_type: String,
    tag_list: Array
})

// --------------->>>>>>>> Product Model <<<<<<<<-------------------

const ProductModel = mongoose.model("products", productschema)

module.exports = {
    ProductModel
}
