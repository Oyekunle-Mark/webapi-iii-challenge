const express = require('express');

const handlers = require('./handlers');
const postValidator = require('../middlewares/postValidators');

const router = express.Router();

router.get('/', handlers.getPosts);
router.post('/', postValidator.validatePost, handlers.createPost);
router.get('/:id', postValidator.validatePostId, handlers.getPostById);
router.delete('/:id', postValidator.validatePostId, handlers.deletePosts);
router.put(
  '/:id',
  postValidator.validatePostId,
  postValidator.validatePost,
  handlers.editPost,
);

module.exports = router;
