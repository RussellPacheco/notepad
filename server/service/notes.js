const dao = require("../dao/notes")

function createNote(newNote) {
    const { user_id, title, body } = newNote

    return dao.createNote(user_id, title, body)
}

function getNotes(notes) {
    const { user_id } = notes

    return dao.getNotes(user_id)
}

function getNote(note) {
    const { note_id } = note

    return dao.getNote(note_id)
}

function updateNote(updateData) {
    const { note_id, title, body } = updateData

    return dao.updateNote(note_id, title, body)
}

function deleteNote(note) {
    const { note_id } = note

    return dao.deleteNote(note_id)
}

module.exports = {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
}