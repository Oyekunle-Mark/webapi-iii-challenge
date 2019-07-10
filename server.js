const express = require('express');

const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');
const logger = require('./middlewares/logger');

const server = express();

server.use(express.json());
server.use(logger);

server.get('/', (req, res) => {
  res.send("<h2>Let's write some middleware!</h2>");
});

server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);

server.use((req, res) =>
  res.status(404).json({
    status: 404,
    message: 'Please check the URL and try again',
  }),
);

module.exports = server;
