// const Note = require('../models/note.model.js');

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    res.json({"message": "Welcome to findAll."});
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    res.json({"message": "Welcome to findOne: " + req.params.noteId});
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    res.json({"message": "Welcome to update: " + req.params.noteId});
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    res.json({"message": "Welcome to delete: " + req.params.noteId});
};