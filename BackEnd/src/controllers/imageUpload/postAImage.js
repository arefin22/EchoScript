const Image = require("../../models/ImageUpload");

const postAImage = async (req, res) => {
  console.log(req.body);
  try {
    // console.log(req.file);
    const image = req.file;

    let imagePath;
    if (image) {
      imagePath = image.path;
    }

    // const result = await Image.create(imagePath);

    // res.send(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = postAImage;
