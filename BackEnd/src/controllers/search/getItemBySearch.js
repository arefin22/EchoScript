const Article = require("../../models/Article");

const getItemBySearch = async (req, res) => {
  const searchQuery = req.query.query;

  try {
    if (searchQuery) {
      let query = {};
      query = { title: { $regex: new RegExp(searchQuery, "i") } };

      const suggestions = await Article.find(query);
      res.send(suggestions);
    }
  } catch (error) {
    res.status(500).json({ error: "Invalid search" });
  }
};

module.exports = getItemBySearch;
// hashtag
// name
// title