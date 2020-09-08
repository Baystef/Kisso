const makeUsers = (n) => {

  const num = n || 15;
  const users = [];
  for (let i = 0; i < num; i++) {
    users.push({
      _id: `56778a${i}`,
      email: `dolly.parton@${i}gmail.com`,
      password: 'testing1234',
      firstName: `Dolly${i}`,
      lastName: `Parton${i}`,
      job: `Painter`
    });
  }
  return users;
};

export const users = makeUsers(10);