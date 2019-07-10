const Posts = require('../posts/postDb');

function validatePostId(req, res, next) {
  const { id } = req.params;

  if (isNaN(Number(id)))
    return res.status(400).json({ message: 'ID must an integer.' });

  Posts.getById(id)
    .then(res => {
      if (Object.keys(res)) next();
    })
    .catch(() => res.status(400).json({ message: 'invalid post id' }));
}

function validatePost(req, res, next) {
  const { text } = req.body;

  if (!req.body) return res.status(400).json({ message: 'missing post data' });

  if (!text)
    return res.status(400).json({ message: 'missing required text field' });

  next();
}

module.exports = {
  validatePostId,
  validatePost,
};
