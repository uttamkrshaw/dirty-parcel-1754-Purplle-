require('dotenv').config()
const app = require("express")
console.log(process.env)

app.listen(4500, async () => {
    try {

        console.log("Server is UP & Running");
    } catch (error) {
        console.log("Error", error.message);
    }
})
