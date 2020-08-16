import request from 'supertest';
import app from '..';
import testDB from '../test-data/db-test';
import { user, newUser } from '../test-data';

let server, agent, userToken;
const { start, stop } = testDB;


beforeAll(async (done) => {
  await start('DaUsa-test');
  server = app.listen(3400, () => {
    agent = request.agent(server);
    done();
  });
});

afterAll(async () => {
  await stop();
  await server.close();
});


describe('Authentication routes', () => {
  it('should signup a new user with status 201', async () => {
    const res = await agent.post('/api/signup').send(newUser);
    expect(res.statusCode).toEqual(201);
    expect(res.body.data.token).toBeTruthy();
    expect(res.body.data.email).toBeTruthy();
    expect(res.body.data.firstName).toBeTruthy();
  });

  it('should return 409 if user already exists', async () => {
    const res = await agent.post('/api/signup').send(newUser);
    expect(res.statusCode).toEqual(409);
    expect(res.body.error).toBeTruthy();
  });

  it('should return 400 if a required field is omitted', async () => {
    const res = await agent.post('/api/signup').send({ ...newUser, firstName: '' });
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toEqual('First name is required');
  });

  it('should sign in an existing user and return 200', async () => {
    const res = await agent.post('/api/signin').send(user);
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.token).toBeTruthy();
    expect(res.body.data._id).toBeTruthy();
  });

  it('should not  sign in a non-existing user and return 401', async () => {
    const res = await agent.post('/api/signin').send({ ...user, email: 'jasper@node.com' });
    expect(res.statusCode).toEqual(401);
    expect(res.body.error).toEqual('Invalid Credentials');
  });
});

