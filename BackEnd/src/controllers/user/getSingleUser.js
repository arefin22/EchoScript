const { default: mongoose } = require("mongoose");
const User = require("../../models/User");

const getSingleUser = async(req, res) => {
    const email = req.params.email;
    const query = { _id: new mongoose.Types.ObjectId(email) };
    const result = await User.findOne(query);
    res.send(result)
};

module.exports = getSingleUser;
