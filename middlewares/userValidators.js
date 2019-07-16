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

function validateUser(req, res, next) {
  const { name } = req.body;

  if (!req.body) return res.status(400).json({ message: 'missing user data' });

  if (!name)
    return res.status(400).json({ message: 'missing required name field' });

  next();
}

module.exports = {
  validateUserId,
  validateUser,
};
