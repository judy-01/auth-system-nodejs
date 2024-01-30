const bcrypt = require('bcrypt');
const User = require('../models/user');

class AuthController {
  async register(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    return user;
  }

  async login(username, password) {
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Incorrect password');
    }

    return user;
  }
}

module.exports = new AuthController();
