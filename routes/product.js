const express = require('express');
// import Product from "../model/Product";

const router = express.Router();

router.get("/api/product", (req, res)=>{
    res.send("Router is working")
})

router.post("/api/product", (req,res)=>{
    const product = new Product({
        name: req.body.name,
        catagory: req.body.catagory,
        image: req.body.image,
        condition: req.body.condition,
        description: req.body.description
    })
})



module.exports= router;



