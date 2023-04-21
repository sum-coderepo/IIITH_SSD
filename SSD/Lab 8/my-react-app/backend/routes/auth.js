const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = 'sumeet1';

router.post('/createuser', (req, res) => {
console.log(req.body);
const user = User(req.body)
user.save()
res.send(req.body);

});


router.post('/login', [
    body('roll', 'Enter your ROll num'),
    body('password', 'Password cannot be blank').exists(),
    body('role', 'role cannot be blank').exists(),
], async (req, res) => {

    let success = false;
    const { roll, password , role } = req.body;
    console.log(roll);
    console.log(role);
    console.log(password);

    try {
        let user = await User.findOne({$and : [{roll: roll}, {role: role} ] });

        console.log("Inside login: ", user);
        if (!user) {
            success = false
            return res.status(400).json({error: "Please try to login with correct credentials"});
        }

        const passwordCompare = password == user.password;
        if (!passwordCompare) {
            success = false
            return res.status(400).json({success, error: "Please try to login with correct credentials"});
        }

        const data = {
            user: {
                roll: user.roll,
                id: user.id,
                role: user.role
            }
        }

        const userSession = { roll: user.roll,
                              role: user.role  };

        console.log(userSession);
        req.session.user = userSession; // Added from here https://github.com/ashishrai96/MERN-expressJs/blob/main/MERN-server/routes/loginRoutes.js
        req.session.save(); // ..
        console.log(req.body);
        console.log("Session: ", req.session)

        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })

        // success = true;
        // res.json({success, data})
    }

    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


//To get Authenticated logged in check
router.get('/isAuth', async (req, res) => {
    if (req.session.user) {
        return res.json(req.session.user)
    } else {
        return res.status(401).json('unauthorize in  isAuth')
    }
})



// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser,  async (req, res) => {

    try {
        roll = req.user.roll;
        id = req.user.id;
        console.log(`roll `, roll);
        const user = await User.findById(id).select("-password");
        console.log(user);
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router


