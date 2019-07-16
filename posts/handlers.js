const Posts = require('./postDb');

const getPosts = (req, res) => {
  Posts.get()
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(500).json(err));
};

const createPost = (req, res) => {
  const { text, user_id } = req.body;

  Posts.insert({ text, user_id })
    .then(post => res.status(201).json(post))
    .catch(err => res.status(500).json(err));
};

const getPostById = (req, res) => {
  const { id } = req.params;

  Posts.getById(id)
    .then(post => res.status(200).json(post))
    .catch(err => res.status(500).json(err));
};

const deletePosts = (req, res) => {
  const { id } = req.params;

  Posts.remove(id)
    .then(post => res.status(200).json(`${post} Record deleted`))
    .catch(err => res.status(500).json(err));
};

const editPost = (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  Posts.update(id, { text })
    .then(post => res.status(200).json(`${post} Record updated`))
    .catch(err => res.status(500).json(err));
};

module.exports = {
  getPosts,
  createPost,
  getPostById,
  deletePosts,
  editPost,
};
