import { validationResult } from 'express-validator';
import { errorRes } from '../utils/response';
import { signupValidate, signinValidate } from './user-validate';



/**
 * @description Class of validators for each route
 */
class Validate {
  /**
   * @description Validates all fields request body
   * @param {string} route Route to be validated
   * @returns {object} error to be caught
   */
  static validate(route) {
    switch (route) {
      case 'signup':
        return signupValidate;

      case 'signin':
        return signinValidate;

      default:
        return [];
    }
  }

  /**
 * @description Resolves validation middleware
 * @param {object} req request object
 * @param {object} res response object
 * @param {function} next move to next middleware
 * @returns {object} JSON response of error
 */
  static checkValidationResult(req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return errorRes(next, 400, errors.array()[0].msg);
  }
}

export default Validate;
