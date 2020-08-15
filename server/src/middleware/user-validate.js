import { check } from 'express-validator';

/**
 * @description Checks all fields of the auth request body
 */
const signupValidate = [
  check('firstName').not().isEmpty()
    .withMessage('First name is required')
    .trim()
    .isLength({ min: 3, max: 25 })
    .withMessage('First name should be between 3 to 25 characters')
    .isAlpha()
    .withMessage('First name should contain alphabets only'),

  check('lastName')
    .optional()
    .trim()
    .isLength({ min: 3, max: 25 })
    .withMessage('Last name should be between 3 to 25 characters')
    .isAlpha()
    .withMessage('Last name should contain alphabets only'),

  check('email').not().isEmpty()
    .withMessage('Email is required')
    .trim()
    .isEmail()
    .withMessage('Invalid Email Address')
    .customSanitizer(email => email.toLowerCase()),

  check('password').not().isEmpty()
    .withMessage('Password is required')
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage('Password must be atleast 8 to 100 characters'),

  check('job')
    .optional()
    .trim()
    .isLength({ min: 2, max: 30 })
    .withMessage('JOb should be between 2 to 30 characters')
    .isAlpha()
    .withMessage('Job should contain alphabets only'),
];

const signinValidate = [
  check('email').not().isEmpty()
    .withMessage('Email is required')
    .trim()
    .isEmail()
    .withMessage('Invalid Email Address')
    .customSanitizer(email => email.toLowerCase()),

  check('password').not().isEmpty()
    .withMessage('Password is required'),
];


export { signupValidate, signinValidate };
