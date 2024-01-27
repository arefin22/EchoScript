const User = require("../../models/User");

const getAllUser = async (req, res, next) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllUser