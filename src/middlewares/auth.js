const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
      const token = req.headers['authorization'];
      if (!token) {
        throw new Error('Inexistent token');
      }
      const decoded = jwt.verify(token, process.env.JWT_KEY)
      req.userId = decoded.id;
      next();
    } catch (error) {
      res.status(401).send({
          msg: 'Unauthorized',
          error
        });
    }
};

module.exports = authMiddleware;