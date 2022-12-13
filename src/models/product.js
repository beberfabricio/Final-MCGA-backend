const { Schema, model} = require("mongoose");

const productSchema = new Schema({
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
    },
    category: {
        type: String,
        required: true,
        enum: ['drink', 'meat', 'vegetable'],
    }
})

module.exports = model("Products", productSchema, "productsFinal");