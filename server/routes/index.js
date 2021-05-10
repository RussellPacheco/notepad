const express = require("express")
const noteController = require("../controller/notes")
const userController = require("../controller/users")


const router = express.Router()

router.post("/notes/create", noteController.createNote)
router.get("/user/:user_id", noteController.getNotes)
router.get("/notes/note", noteController.getNote)
router.post("/notes/note", noteController.updateNote)
router.delete("/notes/note", noteController.deleteNote)

router.post("/user", userController.createUser)
router.post("/user/login", userController.getUser)

module.exports = router;