const express = require('express');
const Router = express.Router();

const siteController = require('../app/controllers/SiteController');

Router.use('/search', siteController.search);

Router.use('/', siteController.home);

module.exports = Router;
