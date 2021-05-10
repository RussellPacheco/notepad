const userService = require("../service/users")


async function createUser(req, res) {
    try {
        const data = await userService.createUser(req.body)
        res.status(201).json(data)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
}

async function getUser(req, res) {
    try {
        const data = await userService.getUser(req.body)
        res.status(201).json(data)
    } catch (err) {
        console.error(err)
        res.status(500).send()
    }
}

module.exports = { createUser, getUser }