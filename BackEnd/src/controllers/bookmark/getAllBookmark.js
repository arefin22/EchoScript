const BookMark = require("../../models/BookMark")

const getAllBookmark = async(req, res) =>{
    const result = await BookMark.find()
    res.send(result)
}

module.exports = getAllBookmark