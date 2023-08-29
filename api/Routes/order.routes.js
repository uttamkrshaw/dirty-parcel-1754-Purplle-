const express = require("express")
const orderRouter = express.Router()
const {OrderModel} = require("../Model/order.model")
const {auth} = require("../Middleware/auth.middleware")
const {admin} = require("../Middleware/admin.middleware")

// --------------->>>>>>>> Get Order List <<<<<<<<-------------------

orderRouter.get("/getorder", admin, async (req, res) => {
    try {
        const order = await OrderModel.find()
        res.status(200).send(order)
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})


// --------------->>>>>>>> Order Details Update <<<<<<<<-------------------

orderRouter.post("/addorder", auth, async (req, res) => {
    try {
        const order = new OrderModel(req.body)
        await order.save()
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})

module.exports = {orderRouter}