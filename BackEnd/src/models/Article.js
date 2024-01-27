const { model, Schema, Types } = require("mongoose");

const CommentSchema = new Schema({
  commentId: {
    type: Types.ObjectId,
    required: true,
  },
  commentText: {
    type: String,
    required: true,
  },
});

const LikesSchema = new Schema({
  id: { type: Types.ObjectId, required: true },
  likesCount: {
    type: Number,
    required: true,
    default: 0,
  },
  totalLikes:{
    type: Number,
    required: true,
  }
});


const ArticleSchema = new Schema({
  authorName: {
    type: String,
    required: true,
  },
  authorImage: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
  postedDate: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  view: {
    type: String,
    required: true,
  },
  comments: [CommentSchema],
  likes: [LikesSchema],
});

const Article = model("article", ArticleSchema);

module.exports = Article;
