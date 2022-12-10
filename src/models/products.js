const mongoose = require("mongoose");

const {Schema} = mongoose;

const productsSchema = new Schema({
    id:{
        type: Schema.Types.ObjectId
    },
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        min: 1,
        required: true
    },
    stock:{
        type: Number,
        min: 0,
    },
    description:{
        type: String,
    }
})

module.exports = mongoose.model("Products", productsSchema, "productsFinal");