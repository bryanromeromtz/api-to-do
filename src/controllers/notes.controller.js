const NoteModel = require('../models/Note');


const notesCtrl = {};

notesCtrl.getNotes = async (req, res) => {
  const notes = await NoteModel.find()
  res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
  const { title, description, author, date } = req.body;
  const newNote = new NoteModel({
    title,
    description,
    author,
    date
  })
  await newNote.save();
  res.json("Note Created");
};

notesCtrl.getNote = async (req, res) => {
  const note = await NoteModel.findById(req.params.id)
  res.json(note)
};

notesCtrl.updateNote = async (req, res) => {
  const { title, description, author, date } = req.body;
  const updNote = await NoteModel.findOneAndUpdate({ _id: req.params.id }, {
    title,
    description,
    author,
    date
  });
  res.json(`Note Updated: ${updNote}`);
};

notesCtrl.deleteNote = async (req, res) => {
  const delNote = await NoteModel.findByIdAndDelete(req.params.id);
  res.json(`Note Deleted: ${delNote}`);
};

module.exports = notesCtrl;