const User = require("../../models/User");

const getUserByEmail = async (email) => {
  try {
    const email = "testEmail@gmail.com";
    const query = { email: email };
    const user = await User.findOne(query);
    console.log(user)
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

module.exports = getUserByEmail;
f