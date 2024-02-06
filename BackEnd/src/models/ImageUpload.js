const { model, Schema } = require("mongoose");

const ImageUploadSchema = new Schema({
  image: {
    type: String,
  },
});

const Image = model("image", ImageUploadSchema);

module.exports = Image