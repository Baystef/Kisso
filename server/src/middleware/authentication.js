import { errorRes } from '../utils/response';
import { Auth } from '../utils'

/**
  * @description Verifies if user is logged in
  * @param {object} req request object
  * @param {object} res response object
  * @param {function} next continue to next method
  */
 
const authentication = (req, res, next) => {
  try {
    const token = req.get('Authorization').replace('Bearer ', '') || req.headers.authorization.split(' ')[1];
    const decoded = Auth.verifyToken(token);
    req.user = decoded;
    if (!req.user._id) {
      return errorRes(next, 401, 'Please login to access this resource');
    }
    return next();
  } catch (error) {
    return errorRes(next, 401, 'Please login to access this resource');
  }
};

export default authentication;
