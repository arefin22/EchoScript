const TextEditor = require("../../models/TextArticle");
const User = require("../../models/User");

const getItemBySearch = async (req, res) => {
  const searchQuery = req.query.query;

  try {
    if (searchQuery) {
      const articleQuery = { title: { $regex: new RegExp(searchQuery, "i") } };
      const articles = await TextEditor.find(articleQuery);

      const userQuery = { name: { $regex: new RegExp(searchQuery, "i") } };
      const user = await User.find(userQuery);

      res.status(200).send({ articles, user });
    }
  } catch (error) {
    res.status(500).json({ error: "Invalid search" });
  }
};

module.exports = getItemBySearch;
