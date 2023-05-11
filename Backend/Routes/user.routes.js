const express = require("express")
const userRouter = express.Router()
const {UserModel} = require("../Model/user.model")
const jwt = require('jsonwebtoken');
// const { sendEmail } = require("../nodemailer")


// --------------->>>>>>>> Get User List <<<<<<<<-------------------

userRouter.get("/list", async (req, res) => {
    const token = req.headers.authorization
    jwt.verify(token, 'password', (err, decoded) => {
        decoded ? res.status(200).send("User Details") : res.status(400).send({"msg": "Login required, cannot access the required route."})
    })
    try {
        const user = await UserModel.find()
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})

// --------------->>>>>>>> User Registration <<<<<<<<-------------------

userRouter.post("/register", async (req, res) => {
    const {username, email} = req.body
    const userfound = await UserModel.find({username, email})
    if (userfound.length === 0) {
        const user = new UserModel(req.body)
        try {
            await user.save()
            res.status(200).send("NEW USER REGISTRATION")
        } catch (error) {
            res.status(400).send({"msg": error.message})
        }
    } else {
        res.status(400).send({"msg": "User Already Exists with Same Credentials. Pls login with same Credentials or Enter new Credentials to Create a Account"})
    }
})

// --------------->>>>>>>> User Login <<<<<<<<-------------------


userRouter.post("/login", async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await UserModel.find({username})
        user.length > 0 ? user[0].password === password ? res.status(200).send({
            "msg": "Login Successful!",
            "token": jwt.sign(
                {
                    foo: 'Auth'
                },
                'password'
            ),
            "user": user
        }) : res.status(400).send({"Msg": "Wrong Password"}) : res.status(400).send({"Msg": "No User Found With Such Credentials"})
    } catch (error) {
        res.status(400).send({"Msg": error.message})
    }
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
