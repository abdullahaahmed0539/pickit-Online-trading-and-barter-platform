const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName : {
        type: String,
        require: [true, 'Product name is required.'],
        trim: true,
    },
    description : {
        type: String,
        require: [true, 'Product description is required.'],
        trim: true,
    },
    user_Id : {
        type: String,
        require: [true, 'User id is required.'],
        trim: true,
    },
    category_Id : {
        type: String,
        require: [true, 'Category id is required.'],
        trim: true,
    },
    price : {
        type: Number,
        require: [true, 'Product price is required.'],
        trim: true,
    },
    transactionType : {
        type: Number,
        require: [true, 'Transaction type is required.'],
        trim: true,
    },
    images: {
        type: [String],
        require: [true, 'Product image is required.'],
        trim: true,
    },
    Date: {
        type: Date,
        require: [true, 'Date added is required.'],
        trim: true,
    },
    status : {
        type: Number,
        require: [true, 'Status is required.'],
        trim: true,
    },
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;