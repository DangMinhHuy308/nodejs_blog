const express = require('express');
const cousreRouter = express.Router();

const courseController = require('../app/controllers/CourseController');
cousreRouter.get('/create', courseController.create);
cousreRouter.post('/store', courseController.store);
cousreRouter.get('/:id/edit', courseController.edit);

cousreRouter.post('/handle-form-actions', courseController.handleFormAction);

cousreRouter.put('/:id', courseController.update);
cousreRouter.delete('/:id', courseController.delete);
cousreRouter.patch('/:id/restore', courseController.restore);
cousreRouter.delete('/:id/force', courseController.forceDelete);

cousreRouter.get('/:slug', courseController.show);


module.exports = cousreRouter;
