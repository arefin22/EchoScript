const History = require("../../models/History");

const postAHistory = async (req, res) => {
  const body = req.body;

  let existingHistory;
  try {
    existingHistory = await History.findOne();
  } catch (error) {
    console.error("Error finding history:", error);
    return res.status(500).send("Error finding history");
  }

  if (existingHistory) {
    existingHistory.timestamp = new Date();
    try {
      await existingHistory.save();
      res.send(existingHistory);
    } catch (error) {
      console.error("Error updating history:", error);
      res.status(500).send("Error updating history");
    }
  } else {
    try {
      const result = await History.create(body);
      res.send(result);
    } catch (error) {
      console.error("Error creating history:", error);
      res.status(500).send("Error creating history");
    }
  }
};

module.exports = postAHistory;
