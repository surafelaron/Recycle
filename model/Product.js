const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProuctSchema = new Schema({
    name: { type: String,  required: true},
    catagory: [{
        type: Schema.Types.ObjectId,
        ref: "catagory"

    }],
    image: {type:Buffer, require: true},
    condition: {type:String,  required: true},
    description: {type: String, required: true}
    

});

const Product =  mongoose.model('Product', ProuctSchema);
module.exports = Product;