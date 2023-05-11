const express = require("express")
const userRouter = express.Router()
const {UserModel} = require("../Model/user.model")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {auth} = require("../Middleware/auth.middleware")


// --------------->>>>>>>> Get User List <<<<<<<<-------------------

userRouter.get("/list", auth, async (req, res) => {
    try {
        const user = await UserModel.find()
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({"msg": "Login required, cannot access the required route."})
    }
})

// --------------->>>>>>>> User Registration <<<<<<<<-------------------

userRouter.post("/register", async (req, res) => {
    const {username, email} = req.body
    const usernamefound = await UserModel.find({username})
    const useremailfound = await UserModel.find({email})
    if (usernamefound.length === 0 && useremailfound.length === 0) {
        try {
            const {
                username,
                email,
                password,
                age,
                location,
                type,
                order
            } = req.body
            bcrypt.hash(password, 5, async (err, hash) => {
                const user = new UserModel({
                    username,
                    email,
                    password: hash,
                    age,
                    location,
                    type,
                    order
                })
                await user.save()
                res.status(200).send("New User Registration Successful")
            })
        } catch (error) {
            res.status(400).send({"msg": error.message})
        }
    } else if (usernamefound.length >= 1 && useremailfound.length >= 1) {
        res.status(400).send({"msg": "User Already Exists with Same Credentials. Pls login with same Credentials or Enter new Credentials to Create a Account"})
    } else if (usernamefound.length === 0 && useremailfound.length >= 1) {
        res.status(400).send({"msg": "An account is Already Registered with this emailId!"})
    }
})

// --------------->>>>>>>> User Login <<<<<<<<-------------------


userRouter.post("/login", async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await UserModel.find({username})
        user.length > 0 ? bcrypt.compare(password, user[0].password, (err, result) => {
            result === true ? res.status(200).send({
                "msg": "Login Successful!",
                "token": jwt.sign(
                    {
                        foo: 'Auth'
                    },
                    'password'
                ),
                "user": user
            }) : res.status(400).send({"msg": "Wrong Password"})
        }) : res.status(400).send({"msg": "No User Found With Such Credentials"})
    } catch (error) {
        res.status(400).send({"msg": error.message})
    }
})


// --------------->>>>>>>> User Details Update <<<<<<<<-------------------

userRouter.patch("/update/:_id", auth, async (req, res) => {
    const {_id} = req.params
    try {
        const user = await UserModel.findByIdAndUpdate(_id,req.body)
        res.status(200).send({"msg":"User Details Updated"})
    } catch (error) {
        res.status(400).send({"msg":error.message})

    }

})

// --------------->>>>>>>> User Delete <<<<<<<<-------------------

userRouter.delete("/delete",auth,async(req, res) => {
    const {_id} = req.params
    try {
        const user = await UserModel.findByIdAndDelete(_id)
        res.status(200).send({"msg":"User Deleted"})
    } catch (error) {
        res.status(400).send({"msg": error.message})

    }
})


module.exports = {
    userRouter
}
