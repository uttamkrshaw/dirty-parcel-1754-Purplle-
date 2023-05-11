const express = require("express")
const productRouter = express.Router()
const {ProductModel} = require("../Model/product.model")
const {auth} = require("../Middleware/auth.middleware")
const {admin} = require("../Middleware/admin.middleware")


// --------------->>>>>>>> Get Product List <<<<<<<<-------------------

productRouter.get("/", auth, async (req, res) => {
    try {
        const product = await ProductModel.find()
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})


// --------------->>>>>>>> Add Product <<<<<<<<-------------------

productRouter.post("/add", admin, async (req, res) => {
    try {
        const product = new ProductModel(req.body)
        await product.save()
        res.status(200).send({"msg":"New Product Added"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

// --------------->>>>>>>> Product Details Update <<<<<<<<-------------------

productRouter.patch("/update/:_id", admin, async (req, res) => {
    const {_id} = req.params
    try {
        const product = await ProductModel.findByIdAndUpdate(_id,req.body)
        res.status(200).send({"msg":"Product Details Updated"})
    } catch (error) {
        res.status(400).send({"msg":error.message})

    }
})

// --------------->>>>>>>> Product Details Delete <<<<<<<<-------------------

productRouter.delete("/delete/:_id",admin,async(req, res) => {
    const {_id} = req.params
    try {
        const product = await ProductModel.findByIdAndDelete(_id)
        res.status(200).send({"msg":"Product Deleted"})
    } catch (error) {
        res.status(400).send({"msg": error.message})

    }
})


module.exports = {
    productRouter
}
