const User = require('../models/user.model');
const ConnectionUser = require('../models/connectionUser.model');
const jwt = require('jsonwebtoken');

console.log("***************ConnectionUser****************")

const createConnectionUser = async (req, res) => {
    console.log("***************createConnectionUser****************")
    debugger
    let myConnectionUser = new ConnectionUser(req.body)
    console.log(myConnectionUser);
    try {
        await myConnectionUser.save(myConnectionUser);
        debugger
        console.log("success create new ConnectionUser!!");
        res.status(200).json({ myConnectionUser });
    }
    catch (error) {
        console.log("failed create new ConnectionUser!!");
        console.log("error: " + error);
        res.status(500).json({ err: error.message })
    }
}

module.exports = {
    createConnectionUser
};