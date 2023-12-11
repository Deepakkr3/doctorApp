const userModel = require("../model/user");
exports.addUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json(err);
  }
};
exports.userGets = async (req, res) => {
  try {
    const user = await userModel.findById();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.signUP = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(200).json({
      message: "hyy there ",
      user: user,
    });
  } catch (err) {
    res.status(500).json({ message: "try again", err: err });
  }
};
exports.login = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(200).json({
      message: "user has been login",
      user: user,
    });
  } catch (err) {}
};
