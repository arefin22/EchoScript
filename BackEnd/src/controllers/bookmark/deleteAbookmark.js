const BookMark = require("../../models/BookMark");

const deleteBookmark = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bookmark = await BookMark.findOneAndDelete(id);
    if (!bookmark)
      return res
        .status(404)
        .json({ message: "No bookmark found with that ID" });
    res.status(200).json(bookmark);
  } catch (err) {
    next(err);
  }
};

module.exports = deleteBookmark;
