const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// define middleware here
app.use(express.urlencoded({extended: true}));
app.use(express.json())

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
  console.log("db connected")
})

app.listen(PORT, function(){
    console.log( ` 🌎  ==>API server now listening on PORT ${PORT}`)
})