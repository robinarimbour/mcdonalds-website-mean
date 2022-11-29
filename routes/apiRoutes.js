const express = require('express');
const router = express.Router();
const { getCategories, 
    getProduct, 
    getFooters, 
    getImageUrl,
    postTransaction} = require('../controllers/apiControllers');

router.get('/categories', getCategories);

router.get('/products/:id', getProduct);

router.get('/footers', getFooters);

router.get('/image-urls/:id', getImageUrl);

router.post('/transaction', postTransaction);

module.exports = router;