const mongoose = require('mongoose');
const { DB_WEBSITE } = require('../my-config');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    id: Number,
    name: String,
    products: [Number]
});

const productSchema = new Schema({
    id: Number,
    name: String,
    descriptions: [String],
    imageGridUrl: String,
    imageFullUrl: String,
    price: Number
});

const Category = mongoose.connection.useDb(DB_WEBSITE).model('Category', categorySchema, 'categories');
const Product = mongoose.connection.useDb(DB_WEBSITE).model('Product', productSchema, 'products');

module.exports = {
    Category,
    Product,
    productSchema
}
