const express = require('express');

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

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Posts.getById(id)
    .then(post => res.status(200).json(post))
    .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Posts.remove(id)
    .then(post => res.status(200).json(`${post} Record deleted`))
    .catch(err => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  Posts.update(id, { text })
    .then(post => res.status(200).json(`${post} Record updated`))
    .catch(err => res.status(500).json(err));
});

// custom middleware

function validatePostId(req, res, next) {}

module.exports = router;
