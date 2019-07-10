const express = require('express');

const handlers = require('./handlers');
const userValidator = require('../middlewares/userValidators');

const router = express.Router();

router.post('/', userValidator.validateUser, handlers.createUser);
router.get('/', handlers.getUsers);
router.get('/:id', userValidator.validateUserId, handlers.getUserById);
router.get('/:id/posts', userValidator.validateUserId, handlers.getUserPost);
router.delete('/:id', userValidator.validateUserId, handlers.deleteUser);
router.put(
  '/:id',
  userValidator.validateUser,
  userValidator.validateUserId,
  handlers.editUser,
);

module.exports = router;
