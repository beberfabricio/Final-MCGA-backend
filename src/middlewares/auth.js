const jwt = require('jsonwebtoken');
const User = require('../models/user')

const authMiddleware = async (req, res, next) => {
    try {
      const token = req.headers['authorization'];
      if (!token) {
        throw new Error('Inexistent token');
      }
      const decoded = await jwt.verify(token, process.env.JWT_KEY)
      const user = await User.findById(decoded.id)

      if (token !== user.token) {
        throw new Error('Invalid token');
      }

      next();
    } catch (error) {
      res.status(401).send({
          msg: 'Unauthorized',
          error
        });
    }
};

module.exports = authMiddleware;