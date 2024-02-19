const { default: mongoose } = require("mongoose");

const BookmarkSchema = new mongoose.Schema({
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "articleId needed!!!"],
  },
  email: {
    type: String,
    required: [true, "email required!!!"],
  },
});

const BookMark = mongoose.model("Bookmark", BookmarkSchema);

module.exports = BookMark;
