const express = require("express")
const userRouter = express.Router()


// --------------->>>>>>>> Get User List <<<<<<<<-------------------

userRouter.get("/list",(req,res)=>{
    res.send("GET USER LIST")
})

// --------------->>>>>>>> User Registration <<<<<<<<-------------------

userRouter.post("/register",(req,res)=>{
    res.send("NEW USER REGISTRATION")
})

// --------------->>>>>>>> User Login <<<<<<<<-------------------


userRouter.post("/login",(req,res)=>{
    res.send("USER LOGIN SUCCESSFUL!")
})

// --------------->>>>>>>> User Details Update <<<<<<<<-------------------

userRouter.patch("/update",(req,res)=>{
    res.send("USER DETAILS UPDATED!")
})

// --------------->>>>>>>> User Delete <<<<<<<<-------------------

userRouter.delete("/register",(req,res)=>{
    res.send("USER DETAILS REMOVED")
})


module.exports = {userRouter}