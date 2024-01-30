const assert = require('assert');
const request = require('supertest');
const app = require('../app');
const User = require('../models/user');

describe('Authentication System', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('should register a new user', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send({
        username: 'testuser',
        password: 'testpassword',
      });

    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.body.username, 'testuser');
    assert.ok(response.body._id);
  });

  it('should not register a duplicate username', async () => {
    await User.create({
      username: 'existinguser',
      password: 'existingpassword',
    });

    const response = await request(app)
      .post('/auth/register')
      .send({
        username: 'existinguser',
        password: 'newpassword',
      });

    assert.strictEqual(response.status, 400);
    assert.strictEqual(response.body.error, 'E11000 duplicate key error dup key: { username: "existinguser" }');
  });

  it('should login an existing user', async () => {
    const existingUser = await User.create({
      username: 'existinguser',
      password: 'existingpassword',
    });

    const response = await request(app)
      .post('/auth/login')
      .send({
        username: 'existinguser',
        password: 'existingpassword',
      });

    assert.strictEqual(response.status, 200);
    assert.deepStrictEqual(response.body, {
      _id: existingUser._id.toString(),
      username: 'existinguser',
    });
  });


  it('should not login with incorrect password', async () => {
    await User.create({
      username: 'userwithincorrectpassword',
      password: 'correctpassword',
    });

    const response = await request(app)
      .post('/auth/login')
      .send({
        username: 'userwithincorrectpassword',
        password: 'incorrectpassword',
      });

    assert.strictEqual(response.status, 401);
    assert.strictEqual(response.body.error, 'Incorrect password');
  });
});



  