const noteService = require("../service/notes")

async function createNote(req, res) {
    try {
        console.log(req.body)
        const data = await noteService.createNote(req.body)
        res.status(201).json(data)
    } catch (err) {
        console.error(err)
        res.status(500).json("Note could not be created")
    }
}

async function getNotes(req, res) {
    try {
        const data = await noteService.getNotes(req.params)
        res.status(201).json(data)
    } catch (err) {
        console.error(err)
        res.status(500).send("Notes could not be retrieved")

    }
}

async function getNote(req, res) {
    try {
        const data = await noteService.getNote(req.body)
        res.status(201).json(data)
    } catch (err) {
        console.error(err)
        res.status(500).send("Note could not be retrieved")

    }    
}

async function updateNote(req, res) {
    try {
        const data = await noteService.updateNote(req.body)
        res.status(201).json(data)
    } catch (err) {
        console.error(err)
        res.status(500).send("Note could not be retrieved")
    }    
}

async function deleteNote(req, res) {
    try {
        const data = await noteService.deleteNote(req.body)
        res.status(201).json(data)
    } catch (err) {
        console.error(err)
        res.status(500).send("Note could not be retrieved")

    }    
}

module.exports = {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
}