const { model, Schema, Types } = require("mongoose");

const HistorySchema = new Schema(
  // {
  //   history: {
  //     type: [Object],
  //   },
  //   timestamp: {
  //     type: Date,
  //     default: Date.now(),
  //   },
  // },
  // { timestamps: true }
  {
    articleId: {
      type: String,
      required: true,
    },
    articleTitle: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

const History = model("History", HistorySchema);

module.exports = History;
