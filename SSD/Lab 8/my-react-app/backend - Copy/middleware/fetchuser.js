var jwt = require('jsonwebtoken');
const JWT_SECRET = 'sumeet1';


const fetchuser = (req, res, next) => {
    const token = req.body.authtoken //req.header('Authorization');
    console.log(req.body);
    console.log(token)

    try {
        const data = jwt.verify(token, JWT_SECRET);
        console.log("Here is data", data)
        // const { flag, data } = req.body;
        req.user = data.user;
        next();
        console.log("Logged")
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}

module.exports = fetchuser;