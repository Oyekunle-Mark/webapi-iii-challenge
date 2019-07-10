const express = require('express');

const postValidator = require('../middlewares/postValidators');

const router = express.Router();
const Posts = require('./postDb');

router.get('/', (req, res) => {
  Posts.get()
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
  const { text, user_id } = req.body;

  Posts.insert({ text, user_id })
    .then(post => res.status(201).json(post))
    .catch(err => res.status(500).json(err));
});

router.get('/:id', postValidator.validatePostId, (req, res) => {
  const { id } = req.params;

  Posts.getById(id)
    .then(post => res.status(200).json(post))
    .catch(err => res.status(500).json(err));
});

router.delete('/:id', postValidator.validatePostId, (req, res) => {
  const { id } = req.params;

  Posts.remove(id)
    .then(post => res.status(200).json(`${post} Record deleted`))
    .catch(err => res.status(500).json(err));
});

router.put('/:id', postValidator.validatePostId, (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  Posts.update(id, { text })
    .then(post => res.status(200).json(`${post} Record updated`))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
