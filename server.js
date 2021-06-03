const express = require("express");
const mongoose = require("mongoose")

const app = express();
const PORT = process.env.PORT || 3001;

// define middleware here
app.use(express.urlencoded({extended: true}));
app.use(express.json())

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/recycle",
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  );


app.listen(PORT, function(){
    console.log( ` 🌎  ==>API server now listening on PORT${PORT}`)
})