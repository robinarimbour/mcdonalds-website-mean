
const { Category, Product } = require('../models/menu');
const Footer = require('../models/footer');
const ImageUrl = require('../models/image-url');
const Transaction = require('../models/transaction');
const { getImageDownloadUrl } = require('../firebase/fb-storage');

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({}).sort({id: 1});
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).json({errorMessage: 'Category collection error'});
    }
}

const getProduct = async (req, res) => {
    const { id } = req.params;
    
    if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
        return res.status(400).json({errorMessage: 'Product ID: ' + id + ' should be a positive integer'});
    }

    const product = await Product.findOne({id: Number(id)});
    
    if (!product) {
        return res.status(404).json({errorMessage: 'Product ID: ' + id + ' does not exist.'})
    }

    product.imageFullUrl = await getImageDownloadUrl(product.imageFullUrl);
    product.imageGridUrl = await getImageDownloadUrl(product.imageGridUrl);

    res.status(200).json(product);
}

const getFooters = async (req, res) => {
    try {
        const footers = await Footer.find({}).sort({id: 1});
        res.status(200).json(footers);
    } catch (err) {
        res.status(400).json({errorMessage: 'Footers collections error'});
    }
}

const getImageUrl = async (req, res) => {
    const { id } = req.params;

    if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
        return res.status(400).json({errorMessage: 'Image Url ID: ' + id + ' should be a positive integer'});
    }

    const imageUrl = await ImageUrl.findOne({id: Number(id)});
    
    if (!imageUrl) {
        return res.status(404).json({errorMessage: 'Image Url ID: ' + id + ' does not exist.'})
    }

    imageUrl.url = await getImageDownloadUrl(imageUrl.url);

    res.status(200).json(imageUrl);
}

const postTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);
        res.status(200).json(transaction);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getCategories,
    getProduct,
    getFooters,
    getImageUrl,
    postTransaction
}