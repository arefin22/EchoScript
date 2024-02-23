const BookMark = require("../../models/BookMark");

const getSingleBookmark = async (req, res) => {
  const bookmark = await BookMark.findById(req.params.id);

  if (!bookmark) {
    return res
      .status(404)
      .json({ success: false, message: "Bookmark not found" });
  }

  res.status(200).json({ success: true, bookmark });
};

module.exports = getSingleBookmark;
