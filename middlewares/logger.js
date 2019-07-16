module.exports = (req, res, next) => {
  console.log(`${req.method} :: ${req.path} :: ${new Date().toString().slice(0, 34)}`);

  next();
};
