const express = require("express")
const userRouter = express.Router()
const {UserModel} = require("../Model/user.model")


// --------------->>>>>>>> Get User List <<<<<<<<-------------------

userRouter.get("/list", (req, res) => {
    res.send("GET USER LIST")
})

// --------------->>>>>>>> User Registration <<<<<<<<-------------------

userRouter.post("/register", async (req, res) => {
    const user = new UserModel(req.body)
    try {
        await user.save()
        res.status(200).send("NEW USER REGISTRATION")
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})

// --------------->>>>>>>> User Login <<<<<<<<-------------------


userRouter.post("/login", (req, res) => {
    res.send("USER LOGIN SUCCESSFUL!")
})

// --------------->>>>>>>> User Details Update <<<<<<<<-------------------

userRouter.patch("/update", (req, res) => {
    res.send("USER DETAILS UPDATED!")
})

// --------------->>>>>>>> User Delete <<<<<<<<-------------------

userRouter.delete("/register", (req, res) => {
    res.send("USER DETAILS REMOVED")
})


module.exports = {
    userRouter
}
