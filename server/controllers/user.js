const bcrypt = require('bcrypt');
const { User } = require('../models');

exports.Register = async (req, res) => {
  console.log('backend', req.body);
  let user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (user) {
    return res.status(401).json({
      success: false,
      message: 'User already exist with same email.',
    });
  }
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  return res.status(200).json({
    user,
    message: 'user register successfully',
  });
};

exports.Login = async (req, res) => {
  console.log('req.body', req.body);
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) {
    return res
      .status(422)
      .json({ success: false, message: 'Incorrect email or password.' });
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res
      .status(422)
      .json({ success: false, message: 'Incorrect email or password.' });
  }
  return res
    .status(200)
    .json({ success: true, user, message: 'user successfully login' });
};
