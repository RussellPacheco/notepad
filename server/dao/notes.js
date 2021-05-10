const db = require("../db")


async function createNote(user_id, title, body) {
    await db("notes").insert({
        user_id: user_id,
        title: title,
        body: body
    })

    return getNotes(user_id)
}

async function getNotes(user_id) {
    const data = await db("notes").where({
        user_id: user_id,
    })
    .select("note_id", "title", "body")
    
    return data
}

async function getNote(note_id) {
    const data = await db("notes").where({
        note_id: note_id
    }).select("note_id", "title", "body")

    return data
}

async function updateNote(note_id, title, body) {
    const data = await db("notes").where({
        note_id: note_id
    }).update({
        title: title,
        body: body
    }, ["note_id", "title", "body"])

    return data
}

async function deleteNote(note_id) {
    const data = await db("notes").where({
        note_id: note_id
    }).del()

    if (data === 0) {
        return "Note Not Found"
    } else if (data === 1) {
        return "Note Deleted"
    }
    
    return data
}

module.exports = {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
}