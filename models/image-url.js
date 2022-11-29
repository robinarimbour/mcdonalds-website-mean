const mongoose = require('mongoose');
const { DB_WEBSITE } = require('../my-config');

const Schema = mongoose.Schema;

const imageUrlSchema = new Schema({
    id: Number,
    name: String,
    url: String
});

module.exports = mongoose.connection.useDb(DB_WEBSITE).model('ImageUrl', imageUrlSchema, 'imageUrls');
