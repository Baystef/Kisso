import { users } from '../makeUsers';

export default {
  get: jest.fn().mockImplementation((url) => {
    switch (url) {
      case "users":
        return Promise.resolve({ data: users });

      default:
        throw new Error(`Bad url: ${url}`)
    }
  }),

  delete: jest.fn().mockImplementation((url) => {
    switch (url) {
      case "users/56778a5":
        return Promise.resolve({ data: users.filter(user => user._id !== "56778a5") });

      default:
        return null;
    }
  })
}