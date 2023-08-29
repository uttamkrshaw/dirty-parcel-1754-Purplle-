const mongoose = require("mongoose")

// --------------->>>>>>>> Order Schema <<<<<<<<-------------------

const orderschema = mongoose.Schema({
    brand: String,
    name: String,
    price: String,
    image_link: String,
    category: String,
    product_type: String,
    user: String,
    date: Date
})

// --------------->>>>>>>> Order Schema <<<<<<<<-------------------

const OrderModel = mongoose.model("order", orderschema)

module.exports = {
    OrderModel
}
