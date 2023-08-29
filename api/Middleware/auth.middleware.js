const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    if (token) {
        const decoded = jwt.verify(token, "password")
        if (decoded) {
            next()
        } else {
            res.status(400).send({"msg": "You Are Not Authorized!"})
        }
    } else {
        res.status(400).send({"msg": "Pls Login First!"})
    }
}
module.exports = {
    auth
}
