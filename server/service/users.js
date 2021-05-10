const dao = require("../dao/users")
const bcrypt = require("bcrypt")


async function createUser(newUser) {

    const userExists = detailsExistanceChecker(newUser)

    if (userExists !== "Success") {
        return userExists
    }

    const { first_name, last_name, username, password, email } = newUser

    const hashedPassword = await bcrypt.hash(password, 10)

    return dao.createUser(first_name, last_name, username, hashedPassword, email)
}

async function getUser(loginDetails) {
    const { username, password } = loginDetails

    const results = await dao.getUser(username, password)

    if (!results.length) {
        return "User doesn't exist"
    }

    try {
        if (await bcrypt.compare(password, results[0].password)) {

            const data = {
                user_id: results[0].user_id,
                first_name: results[0].first_name,
                username: results[0].username
            }

            return data
        } else {
            return "Username and Password does not match"
        }
    } catch (err) {
        return err        
    }
}

function detailsExistanceChecker(detailsToCheck) {
    const { username, email } = detailsToCheck

    const usernameCheck = dao.getUsername(username)

    if (usernameCheck.length) {
        return "Username Exists"
    }

    const emailCheck = dao.getEmail(email)

    if (emailCheck.length) {
        return "Email Exists"
    }

    return "Success"
}

module.exports = { createUser, getUser }