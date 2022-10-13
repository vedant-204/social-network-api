const router = require('express').Router();
const User = require('../models/User');


router.get("/register", async (req, res) => {
    const newUser = await new User ({
        username: "john22",
        email: "vedtemp84@gmail.com",
        password: "123456",
    });
    await newUser.save();
    res.send("ok")
});

module.exports = router;



