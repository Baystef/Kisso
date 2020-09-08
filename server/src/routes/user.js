import { Router } from 'express';
import  Users from '../controllers/userController';
import authentication from '../middleware/authentication';
import Validate from '../middleware/validate';

const router = Router();

const { signUp, signIn, getUsers, getUser, addUser, deleteUser, changePassword } = Users;
const { validate, checkValidationResult } = Validate;

// New user signup
router.post('/signup', validate('signup'), checkValidationResult, signUp);

// User signin
router.post('/signin', validate('signin'), checkValidationResult, signIn);

// Add new user  //validate('signup'), checkValidationResult,
router.post('/users', authentication, addUser)

// Get all users
router.get('/users', authentication, getUsers);

// Get a User
router.get('/users/:id', authentication, getUser);

// Delete a User
router.delete('/users/:id', authentication, deleteUser);

// Change Password
router.put('/user/change_password', authentication, changePassword);


export default router;
