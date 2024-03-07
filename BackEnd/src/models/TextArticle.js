const { model, Schema, Types } = require("mongoose");

const CommentSchema = new Schema(
  {
    id: {
      type: Types.ObjectId,
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
    },
    image: {
      type: String,
    },
    date: {
      type: String,
      required: true,
      default: new Date(),
    },
  },
);

const LikesSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String },
  likesCount: { type: Number, required: true },
  date: {
    type: String,
    default: new Date(),
  },
});

const TextEditorSchema = new Schema(
  {
    texteditor: {
      type: Object,
    },
    comments: [CommentSchema],
    likes: [LikesSchema],
    status: {
      type: String,
      enum: ['active', 'suspend'],
      default: 'active'
    }
  },
  { timestamps: true }
);

const TextEditor = model("TextEditor", TextEditorSchema);

module.exports = TextEditor;
