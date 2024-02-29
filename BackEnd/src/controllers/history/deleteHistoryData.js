const History = require("../../models/History");

const deleteHistoryData = async (req, res, next) => {
    try {
      const id = req.params.id;
      const history = await History.findOneAndDelete(id);
      if (!history)
        return res
          .status(404)
          .json({ message: "No history found with that ID" });
      res.status(200).json("deleted successfully");
    } catch (err) {
      next(err);
    }
};

module.exports = deleteHistoryData;
