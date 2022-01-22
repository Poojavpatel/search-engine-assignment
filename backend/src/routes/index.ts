const express = require('express');
const searchController = require('../controllers/search.js')
const router = express.Router();

router.get('/search', searchController.getSearchResults);

module.exports = router ;