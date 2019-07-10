const express = require('express');

const userRouter = require('./users/userRouter');
const logger = require('./middlewares/logger');

const server = express();

server.use(express.json());
server.use(logger);

server.get('/', (req, res) => {
  res.send("<h2>Let's write some middleware!</h2>");
});

server.use('/api/users', userRouter);

module.exports = server;
