import axios from 'axios';
import { config } from '../config/index';
import { RequestHandler } from 'express';

const getSearchResults: RequestHandler = async (req, res) => {
  res.status(200).send({});
}

export {
  getSearchResults
}