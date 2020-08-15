import User from '../models/user';
import { Auth } from '../utils';
import { successRes, errorRes } from '../utils/response';

/**
 * @description Houses the methods for the users endpoint
 */
class userController {
  /**
  * @description Creates new user account
  * @param {object} req request object
  * @param {object} res response object
  * @returns {object}  JSON response
  */
  static async signUp(req, res, next) {
    const { email, password, firstName, lastName, job } = req.body;
    let user = new User({
      firstName,
      lastName,
      email,
      password,
      job,
    });

    try {
      const exists = await User.findOne({ email });
      if (exists) {
        const msg = 'User already exists';
        return errorRes(next, 409, msg);
      }
      user = await user.save();
      const token = user.generateToken();
      const { _id, createdAt } = user;
      res.setHeader('Authorization', `Bearer ${token}`);
      const data = {
        token, _id, firstName, lastName, email, job, createdAt,
      };
      return successRes(res, 201, data);
    } catch (error) {
      return errorRes(next, 500, 'Internal Server Error');
    }
  }

  /**
  * @description Sign-in existing user
  * @param {object} req request object
  * @param {object} res response object
  * @returns {object}  JSON response
  */
  static async signIn(req, res, next) {
    const { email, password } = req.body;

    try {
      const data = await User.findOne({ email });
      if (!data) {
        const msg = 'Invalid Credentials';
        return errorRes(next, 401, msg);
      }
      if (!Auth.compare(password, data.password)) {
        const msg = 'Invalid Credentials';
        return errorRes(next, 401, msg);
      }
      const { _id, firstName, lastName, job } = data;
      const token = Auth.generateToken({ _id });
      const output = { token, _id, firstName, lastName, email, job };
      res.setHeader('Authorization', `Bearer ${token}`);
      return successRes(res, 200, output);
    } catch (error) {
      return errorRes(next, 500, 'Internal Server Error');
    }
  }

  /**
  * @description Get all users
  * @param {object} req request object
  * @param {object} res response object
  * @returns {object}  JSON response
  */
  static async getUsers(req, res, next) {
    try {
      const users = await User.find().select('-password');
      if (!users[0]) {
        const msg = 'No registered users yet';
        return errorRes(next, 404, msg);
      }
      return successRes(res, 200, users);
    } catch (error) {
      return errorRes(next, 500, 'Internal Server Error');
    }
  }

  /**
  * @description Get a user
  * @param {object} req request object
  * @param {object} res response object
  * @returns {object}  JSON response
  */
  static async getUser(req, res, next) {
    const { id } = req.params;
    try {
      const user = await User.findById(id).select('-password');
      if (!user) {
        const msg = 'User not found';
        return errorRes(next, 404, msg);
      }
      return successRes(res, 200, user);
    } catch (error) {
      return errorRes(next, 500, 'Internal Server Error');
    }
  }


  /**
* @description Add a user
* @param {object} req request object
* @param {object} res response object
* @returns {object}  JSON response
*/
  static async addUser(req, res, next) {
    const { email, password, firstName, lastName, job } = req.body;
    let user = new User({
      firstName,
      lastName,
      email,
      password,
      job,
    });

    try {
      const exists = await User.findOne({ email });
      if (exists) {
        const msg = 'User already exists';
        return errorRes(next, 409, msg);
      }
      await user.save();
      return successRes(res, 201, 'User Added successfully');
    } catch (error) {
      return errorRes(next, 500, 'Internal Server Error');
    }
  }


  /**
  * @description Delete a user
  * @param {object} req request object
  * @param {object} res response object
  * @returns {object}  JSON response
  */
  static async deleteUser(req, res, next) {
    const { id } = req.params;
    try {
      const exists = await User.findById(id);
      if (!exists) {
        const msg = 'User not found';
        return errorRes(next, 404, msg);
      }

      if (req.user._id === id) {
        const msg = 'You cannot delete yourself';
        return errorRes(next, 400, msg);
      }

      await User.findByIdAndDelete(id)
      return successRes(res, 200, 'User deleted successfully');
    } catch (error) {
      return errorRes(next, 500, 'Internal Server Error');
    }
  }


  /**
  * @description Change password
  * @param {object} req request object
  * @param {object} res response object
  * @returns {object}  JSON response
  */
  static async changePassword(req, res, next) {
    const { password, newPassword } = req.body;
    const { _id } = req.user

    try {
      const user = await User.findOne({ _id })
      if (!user) {
        const msg = 'User does not exist';
        return errorRes(next, 404, msg);
      }

      const isPasswordValid = Auth.compare(password, user.password);
      if (!isPasswordValid) {
        return errorRes(next, 401, 'Incorrect Password');
      }

      const hashPassword = Auth.hash(newPassword);
      const update = { password: hashPassword }
      await User.findOneAndUpdate({ _id }, { $set: update }, { new: true }); //.select('-password')
      const msg = 'Password changed successfully';
      return successRes(res, 200, msg);
    } catch (error) {
      return errorRes(next, 500, 'Internal Server Error');
    }
  }
}

export default userController;
