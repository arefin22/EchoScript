const TextEditor = require("../../models/TextArticle");
const User = require("../../models/User");

const getStats = async (req, res, next) => {
  try {
    const users = await User?.estimatedDocumentCount();
    const article = await TextEditor.estimatedDocumentCount();
    const writer = await User?.find({ role: "writer" });

    if (!users || !article || !writer) {
      return res.status(500).json({ error: "This collection is not found" });
    }

    const writerLength = writer?.length;
    
    res.status(200).json({
      users,
      article,
      writerLength,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getStats;
