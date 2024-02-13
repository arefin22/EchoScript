const { model, Schema, Types } = require("mongoose");

const LikeOfCommentSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
    required: true,
    default: 0,
  },
});

const CommentSchema = new Schema({
  id: {
    type: Types.ObjectId,
    required: true,
  },
  commentText: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
    default: new Date(),
  },
  likesofcomment: [LikeOfCommentSchema],
});

const LikesSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  likesCount: { type: Number, required: true },
});

const TextEditorSchema = new Schema({
  texteditor: {
    type: Object,
  },
  comments: [CommentSchema],
  likes: [LikesSchema],
});

const TextEditor = model("TextEditor", TextEditorSchema);

module.exports = TextEditor;
