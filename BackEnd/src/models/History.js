const { model, Schema } = require("mongoose");

const HistorySchema = new Schema({
  history: {
    type: [Object],
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

const History = model("History", HistorySchema);

module.exports = History;
