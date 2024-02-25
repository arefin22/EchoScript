const TextEditor = require("../../models/TextArticle");

const updateATextArticle = async (req, res) => {
  const id = req.params.id;
  const newTextContent = req.body;

  try {
    if (!newTextContent) {
      res.status(400).json({ message: "updated content needed" });
      return;
    }

    const updatedArticle = await TextEditor.findByIdAndUpdate(
      id,
      {
        $set: newTextContent,
      },
      { new: true, upsert: true }
    );

    if (!updatedArticle) {
      res.status(404).json({ message: "Text article not found" });
      return;
    }

    res.send(updatedArticle);
  } catch (error) {
    console.error("Error updating text article:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updateATextArticle;