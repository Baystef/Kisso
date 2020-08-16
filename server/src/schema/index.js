import User from '../models/user';
import users from './user.seeder';


// const modelArray = [User];

const populate = (Model, seeds) => {
  seeds.forEach((seed) => {
    const newModel = new Model(seed);
    newModel.save();
  });
};

const erase = async (Model) => {
  await Model.deleteMany({});
};

const unseed = async () => {
  try {
    console.log('Clearing database...');
    return await erase(User)
  } catch (error) {
    console.log(error.message);
  }
};

const seed = async () => {
  try {
    await populate(User, users);
    console.log('Database seeded!');
  } catch (error) {
    console.log(error.message);
  }
};

export { seed, unseed };
