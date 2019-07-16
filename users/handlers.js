const Users = require('./userDb');

const createUser = (req, res) => {
  const { name } = req.body;

  Users.insert({ name })
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json(err));
};

const getUsers = (req, res) => {
  Users.get()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err));
};

const getUserById = (req, res) => {
  const { id } = req.params;

  Users.getById(id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err));
};

const getUserPost = (req, res) => {
  const { id } = req.params;

  Users.getUserPosts(id)
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(500).json(err));
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then(user => res.status(200).json(`${user} user deleted.`))
    .catch(err => res.status(500).json(err));
};

const editUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  Users.update(id, { name })
    .then(user => res.status(200).json(`${user} user successfully updated.`))
    .catch(err => res.status(500).json(err));
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  getUserPost,
  deleteUser,
  editUser,
};
