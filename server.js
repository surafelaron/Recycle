const express = require("express");
const mongoose = require("mongoose");
const connectDB = require('./config')
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// define middleware here
app.use(express.urlencoded({extended: true}));
app.use(express.json())

connectDB();

app.listen(PORT, function(){
    console.log( ` 🌎  ==>API server now listening on PORT ${PORT}`);
})