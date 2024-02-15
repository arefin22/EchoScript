const User = require("../../models/User");

const addAUser = async (req, res) => {
  const body = req.body;
  console.log(body)
  const query = { email: body.email };
  const isExist = await User.findOne(query);
  if (isExist) {
    return res.status(302).json({ message: "user already exists" });
  } else {
    const result = await User.create(body);
    res.send(result);
  }
};

module.exports = addAUser