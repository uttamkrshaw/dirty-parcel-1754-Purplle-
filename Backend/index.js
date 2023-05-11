require('dotenv').config()

const express = require("express");
const cors = require("cors");
const app = express()

// --------------->>>>>>>> Imports <<<<<<<<-------------------
const {connection} = require("./db")
const {userRouter} = require("./Routes/user.routes");
const {productRouter} = require('./Routes/product.routes');


// --------------->>>>>>>> Middlewares <<<<<<<<-------------------
app.use(cors());
app.use(express.json());

// --------------->>>>>>>> Routers <<<<<<<<-------------------
app.use("/users", userRouter)
app.use("/product", productRouter)


// --------------->>>>>>>> Server Running <<<<<<<<-------------------

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Server is UP & Running");
    } catch (error) {
        console.log("Error", error.message);
    }
})
