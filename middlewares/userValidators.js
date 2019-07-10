const Users = require('../users/userDb');

function validateUserId(req, res, next) {
  const { id } = req.params;

  if (isNaN(Number(id)))
    return res.status(400).json({ message: 'ID must an integer.' });

  req.user = id;

  Users.getById(id)
    .then(res => {
      if (Object.keys(res)) next();
    })
    .catch(() => res.status(400).json({ message: 'invalid user id' }));
}

function validateUser(req, res, next) {}

module.exports = {
  validateUserId,
};
