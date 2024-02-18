const { default: mongoose } = require("mongoose");
const User = require("../../models/User");

const deleteAUser = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new mongoose.Types.ObjectId(id) };
  const result = await User.deleteOne(filter);
  res.send(result);
};

module.exports = deleteAUser;