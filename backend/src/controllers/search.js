const axios = require('axios');
const CONFIG_CONSTANTS = require('../config/index');

const getSearchResults = async (req, res) => {  
  res.status(200).send({});
}

module.exports = {
  getSearchResults
}