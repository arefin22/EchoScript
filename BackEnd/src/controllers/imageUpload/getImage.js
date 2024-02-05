const Image = require("../../models/ImageUpload");

const getImage = async(req, res) =>{
    const result = await Image.find();
    res.send(result);
}

module.exports = getImage