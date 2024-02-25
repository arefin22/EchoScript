const { model, Schema } = require("mongoose");

const HistorySchema = new Schema(
  {
    history: {
      type: [Object],
    },
    timestamp: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const History = model("History", HistorySchema);

module.exports = History;
