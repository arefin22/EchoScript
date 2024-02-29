const TextEditor = require("../../models/TextArticle");

const deleteComment = async (req, res) => {
  try {
    const articleId = req.params.articleId;
    const commentId = req.params.commentId;
    const userEmail = req.query.userEmail;

    // Find the article by ID
    const article = await TextEditor.findById(articleId);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    // Find the comment in the article's comments array
    const comment = article.comments.find(
      (comment) => comment._id.toString() === commentId
    );

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Check if the user is authorized to delete the comment
    if (comment.email !== userEmail) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete this comment" });
    }

    // Remove the comment from the article's comments array
    article.comments = article.comments.filter(
      (comment) => comment._id.toString() !== commentId
    );

    // Save the updated article
    await article.save();

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = deleteComment;
