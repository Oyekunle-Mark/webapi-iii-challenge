const express = require('express');

const userValidator = require('../middlewares/userValidators');

const router = express.Router();
const Users = require('./userDb');

router.post('/', userValidator.validateUser, (req, res) => {
  const { name } = req.body;

  Users.insert({ name })
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json(err));
});

router.get('/', (req, res) => {
  Users.get()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err));
});

router.get('/:id', userValidator.validateUserId, (req, res) => {
  const { id } = req.params;

  Users.getById(id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err));
});

router.get('/:id/posts', userValidator.validateUserId, (req, res) => {
  const { id } = req.params;

  Users.getUserPosts(id)
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(500).json(err));
});

router.delete('/:id', userValidator.validateUserId, (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then(user => res.status(200).json(`${user} user deleted.`))
    .catch(err => res.status(500).json(err));
});

router.put(
  '/:id',
  userValidator.validateUser,
  userValidator.validateUserId,
  (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    Users.update(id, { name })
      .then(user => res.status(200).json(`${user} user successfully updated.`))
      .catch(err => res.status(500).json(err));
  },
);

module.exports = router;
