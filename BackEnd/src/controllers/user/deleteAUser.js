const { default: mongoose } = require("mongoose");
const User = require("../../models/User");

const deleteAUser = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new mongoose.Types.ObjectId(id) };
  await User.deleteOne(filter);
  res.status(200).json("deleted successfully");
};

module.exports = deleteAUser;