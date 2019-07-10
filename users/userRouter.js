const express = require('express');

const router = express.Router();
const Users = require('./userDb');

router.post('/', (req, res) => {
  const { name } = req.body;

  Users.insert({ name })
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json(err));
});

router.post('/:id/posts', (req, res) => {});

router.get('/', (req, res) => {
  Users.get()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Users.getById(id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err));
});

router.get('/:id/posts', (req, res) => {});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then(user => res.status(200).json(`${user} user deleted.`))
    .catch(err => res.status(500).json(err));
});

router.put('/:id', (req, res) => {});

//custom middleware

function validateUserId(req, res, next) {}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = router;
