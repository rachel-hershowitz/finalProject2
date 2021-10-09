const PersonalInformation = require('../models/personalInformation.model');

const getPersonalInformation = async (req, res) => {
    console.log("***********getPersonalInformation*************");
    try {
        let info = await PersonalInformation.find()
        console.log(info);
        if (info == null) {
            res.send("could not have info");
        }
        return res.status(200).json(info)
    }
    catch (error) {
        console.log("-------error-------")
        return res.status(500).json({ myMessage: error.message })
    }
}

module.exports = {
    getPersonalInformation
}