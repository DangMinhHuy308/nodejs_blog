const express = require('express');
const Router = express.Router();

const siteController = require('../app/controllers/SiteController');

Router.get('/search', siteController.search);

Router.get('/', siteController.home);

module.exports = Router;
