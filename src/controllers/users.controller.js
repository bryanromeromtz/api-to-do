const UserModel = require('../models/User');

const usersCtrl = {};

usersCtrl.getUsers = async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
};

usersCtrl.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new UserModel({
    username
  });
  await newUser.save()
    .then((data) => res.json(data))
    .catch((error) => console.log('Error creating a new user', error))
  // res.json(newUser);
};

usersCtrl.deleteUser = async (req, res) => {
  const delUser = await UserModel.findByIdAndDelete(req.params.id);
  res.json(`User Deleted: ${delUser}`);
};


module.exports = usersCtrl;