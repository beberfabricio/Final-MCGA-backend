const authMiddleware = (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (token !== process.env.TOKEN) {
        throw new Error('Invalid token');
      }
      next();
    } catch (error) {
      res.status(401).send({
          msg: 'Unauthorized',
          reason: error
        });
    }
};

module.exports = authMiddleware;