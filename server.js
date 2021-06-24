const express = require("express");
const mongoose = require("mongoose");
const connectDB = require('./config')
const dotenv = require('dotenv');

const productRoutes = require('./routes/product')

dotenv.config();



const app = express();
const PORT = process.env.PORT || 3001;

// define middleware here
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(productRoutes)

connectDB();

app.listen(PORT, function(){
    console.log( ` 🌎  ==>API server now listening on PORT ${PORT}`)
})