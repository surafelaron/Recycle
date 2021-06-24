const router = require('express').Router();
const User = require('../model/user');

router.post('/register', (req,res) => {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        image: req.body.image,
        adress: req.body.adress,
        password: req.body.password,
    })
})