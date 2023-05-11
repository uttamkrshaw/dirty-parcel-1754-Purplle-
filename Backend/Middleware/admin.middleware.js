const jwt = require("jsonwebtoken")

const admin = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    const type = req.headers.type
    if (token) {
        const decoded = jwt.verify(token, "password")
        if (decoded && type==="ADMIN") {
            next()
        } else {
            res.status(400).send({"msg": "You Are Not Authorized!"})
        }
    } else {
        res.status(400).send({"msg": "Pls Login First!"})
    }
}
module.exports = {
    admin
}
