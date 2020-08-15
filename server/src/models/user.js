import mongoose from 'mongoose';
import { config } from 'dotenv';
import { Auth } from '../utils';

config();

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    trim: true,
  },
  lastName: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 255,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 360,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  job: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 100,
    trim: true,
  },
});

userSchema.methods.generateToken = function () {
  const token = Auth.generateToken({ _id: this._id })
  return token;
};

userSchema.pre('save', async function (next) {
  const hashedPassword = Auth.hash(this.password);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model('User', userSchema);

export default User;
