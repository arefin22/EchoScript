const User = require("../../models/User");

const getSingleUser = async(req, res) => {
    const email = req.params?.email;
    const query = {email: email}
    const result = await User.findOne(query);
    res.send(result)
};

module.exports = getSingleUser;
