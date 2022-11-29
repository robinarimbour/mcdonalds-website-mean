const mongoose = require('mongoose');
const { DB_USER } = require('../my-config');
const { productSchema } = require('./menu');

const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    product: productSchema,
    quantity: Number
});

const checkoutFormSchema = new Schema({
    firstName: String,
    lastName: String,
    address: String,
    country: String,
    postalCode: String,
    phone: String,
    creditCard: String,
    code: String,
    expiry: String
});

const ipDataSchema = new Schema({
    country_code: String,
    country_name: String,
    city: String,
    postal: String,
    latitude: Number,
    longitude: Number,
    IPv4: String,
    state: String
})

const transactionSchema = new Schema({
    cartItems: [cartItemSchema],
    tax: Number,
    totalPrice: Number,
    checkoutForm: checkoutFormSchema,
    ipData: ipDataSchema
});

module.exports = mongoose.connection.useDb(DB_USER).model('Transaction', transactionSchema, 'transactions');
