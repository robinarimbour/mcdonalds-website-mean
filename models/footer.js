const mongoose = require('mongoose');
const { DB_WEBSITE } = require('../my-config');

const Schema = mongoose.Schema;

const contentSchema = new Schema({
    heading: String,
    url: String
});

const footerSchema = new Schema({
    title: String,
    content: [contentSchema]
});

module.exports = mongoose.connection.useDb(DB_WEBSITE).model('Footer', footerSchema, 'footers');
