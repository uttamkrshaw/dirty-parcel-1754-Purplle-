const app = require("express")

app.listen(4500, async () => {
    try {

        console.log("Server is UP & Running");
    } catch (error) {
        console.log("Error", error.message);
    }
})
