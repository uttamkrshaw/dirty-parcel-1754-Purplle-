const express = require("express")
const productRouter = express.Router()
const {ProductModel} = require("../Model/product.model")
const {auth} = require("../Middleware/auth.middleware")
const {admin} = require("../Middleware/admin.middleware")


// --------------->>>>>>>> Get All Product List <<<<<<<<-------------------

productRouter.get("/getall", auth, async (req, res) => {
    try {
        const {page} = req.query
        let skip
        if (page) 
            skip = (page - 1) * 30;
         else 
            skip = 0

        const product = await ProductModel.find().skip(skip).limit(30);
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})


// --------------->>>>>>>> Get Specific Category Product List <<<<<<<<-------------------

productRouter.get("/getcat", auth, async (req, res) => {
    try {
        const {page, category} = req.query
        let skip
        if (page) 
            skip = (page - 1) * 30;
         else 
            skip = 0

        const product = await ProductModel.find({
            category: {
                $regex: `(?i)${category}`
            }
        }).skip(skip).limit(30);
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})


// --------------->>>>>>>> Get Specific Product_type Product List <<<<<<<<-------------------

productRouter.get("/gettype", auth, async (req, res) => {
    try {
        const {page, type} = req.query
        let skip
        if (page) 
            skip = (page - 1) * 30;
         else 
            skip = 0

        const product = await ProductModel.find({
            product_type: {
                $regex: `(?i)${type}`
            }
        }).skip(skip).limit(30);
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})


// --------------->>>>>>>> Get Specific Tag_List Product List <<<<<<<<-------------------

productRouter.get("/gettag", auth, async (req, res) => {
    try {
        const {page, tag} = req.query
        let skip
        if (page) 
            skip = (page - 1) * 30;
         else 
            skip = 0

        const product = await ProductModel.find({
            tag_list: {
                $regex: `(?i)${tag}`
            }
        }).skip(skip).limit(30);
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})


// --------------->>>>>>>> Get Specific Brand Product List <<<<<<<<-------------------

productRouter.get("/getbrand", auth, async (req, res) => {
    try {
        const {page, brand} = req.query
        let skip
        if (page) 
            skip = (page - 1) * 30;
         else 
            skip = 0

        const product = await ProductModel.find({
            brand: {
                $regex: `(?i)${brand}`
            }
        }).skip(skip).limit(30);
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})


// --------------->>>>>>>> Get Specific Product  <<<<<<<<-------------------

productRouter.get("/get/:_id", auth, async (req, res) => {
    try {
        const {_id} = req.params
        const product = await ProductModel.find({_id})
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})

// --------------->>>>>>>> Add Product <<<<<<<<-------------------

productRouter.post("/add", admin, async (req, res) => {
    try {
        const product = new ProductModel(req.body)
        await product.save()
        res.status(200).send({"msg": "New Product Added"})
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})

// --------------->>>>>>>> Product Details Update <<<<<<<<-------------------

productRouter.patch("/update/:_id", admin, async (req, res) => {
    const {_id} = req.params
    try {
        const product = await ProductModel.findByIdAndUpdate(_id, req.body)
        res.status(200).send({"msg": "Product Details Updated"})
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})

// --------------->>>>>>>> Product Details Delete <<<<<<<<-------------------

productRouter.delete("/delete/:_id", admin, async (req, res) => {
    const {_id} = req.params
    try {
        const product = await ProductModel.findByIdAndDelete(_id)
        res.status(200).send({"msg": "Product Deleted"})
    } catch (error) {
        res.status(400).send({"msg": error.message})

    }
})


module.exports = {
    productRouter
}


// movieRouter.get("/movieTitle", async (req, res)=>{
//     try {
//      const query = req.query.q
//      let movies = await movieModel.find({Title: {$regex:`(?i)${query}`}})
//      res.send(movies)
//     } catch (error) {
//      console.log("Error: " + error)
//     }
// })
