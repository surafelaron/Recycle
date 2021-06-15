const router = require('express').Router();
const User = require('../model/user');

router.post('/register', (req,res) => {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.first_name,
        email: req.body.first_name,
        phone: req.body.first_name,
        image: req.body.first_name,
        adress: req.body.first_name,
        password: req.body.first_name,
    })
})