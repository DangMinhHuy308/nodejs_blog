const express = require('express');
const cousreRouter = express.Router();

const meController = require('../app/controllers/MeController');
cousreRouter.get('/stored/courses', meController.storedCourses);
cousreRouter.get('/trash/courses', meController.trashCourses);



module.exports = cousreRouter;
