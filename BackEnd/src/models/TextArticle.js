const { model, Schema } = require("mongoose");

const TextEditorSchema = new Schema({
  texteditor: {
    type: [Object],
  },
});

const TextEditor = model("TextEditor", TextEditorSchema);

module.exports = TextEditor;