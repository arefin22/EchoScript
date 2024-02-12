const History = require("../../models/History");

const postAHistory = async (req, res) => {
  const body = req.body;
  const result = await History.create(body);
  res.send(result);
};

module.exports = postAHistory;
