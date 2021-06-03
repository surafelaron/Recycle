const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

// define middleware here
app.use(express.urlencoded({extended: true}));
app.use(express.json())



app.listen(PORT, function(){
    console.log( ` 🌎  ==>API server now listening on PORT${PORT}`)
})