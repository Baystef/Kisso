/* eslint-disable no-confusing-arrow */
import mongoose from 'mongoose';

const env = process.env.NODE_ENV;

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

const db = (name = 'DaUsa-test') => {
  mongoose.connect(env === 'test' ? `mongodb://localhost:27017/${name}` : process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => env === 'test' ? console.log('Connected to MongoDB...') : console.log('Connected to MongoDB...'))
    .catch((err) => env === 'test' ? console.log(err.message) : console.log(err.message));
};

const dbDisconnect = () => {
  console.log('Database disconnecting...');
  mongoose.disconnect();
};

export { db, dbDisconnect };