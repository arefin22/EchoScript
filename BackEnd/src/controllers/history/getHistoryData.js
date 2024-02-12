const History = require("../../models/History");

const getHistoryData = async(req, res) =>{
    const result = await History.find();
    res.send(result);
}

module.exports = getHistoryData