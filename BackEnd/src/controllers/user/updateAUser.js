const { default: mongoose } = require("mongoose");
const User = require("../../models/User");

const updateAUser = async (req, res) => {
  const id = req.params.id;
  const { name, email, role, membership } = req.body;
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const options = { upsert: true };
  const updateDoc = {
    $set: {
      name: name,
      email: email,
      role: role,
      membership: membership
    },
  };
  const result = await User.updateOne(query, updateDoc, options);
  res.send(result)
};
module.exports = updateAUser;
