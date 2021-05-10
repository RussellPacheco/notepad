const db = require("../db")


async function createUser(first_name, last_name, username, hashedPassword, email) {

    await db("users").insert({
        first_name: first_name,
        last_name: last_name,
        username: username,
        password: hashedPassword,
        email: email,
    })

    return "Completed"
}

async function getUser(username) {

    const data = await db("users").where({
        username: username,
    })
    .select("user_id", "username", "password", "first_name")
    
    return data
}

async function getUsername(username) {
    return await db("users").where({
        username: username
    }).select("*")
}

async function getEmail(email) {
    return await db("users").where({
        email: email
    }).select("*")
}



module.exports = {
    getUser,
    createUser,
    getUsername,
    getEmail,    
}