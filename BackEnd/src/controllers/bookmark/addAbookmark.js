const BookMark = require("../../models/BookMark");
const User = require("../../models/User");

const addAbookmark = async (req, res, next) => {
  try {
    const { linkId, user: email } = req.body;

    const allUser = await User?.find();

    const user = allUser.filter(
      (item) => item.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    } else {

      const existingBookmark = await BookMark.findOne({
        articleId: linkId,
        email: email,
      });

      if (existingBookmark) {
        await BookMark.findOneAndDelete({
          articleId: linkId,
          email: email,
        });

         res.status(200).json({
          success: false,
          message: "Bookmark removed",
        });
      } else {
        const bookmark = await BookMark.create({
          articleId: linkId,
          email: email,
        });

        res.status(200).json({
          success: true,
          bookmark,
        });
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = addAbookmark;
