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

// const saveAllDetails = async (req, res) => {

//     console.log("***************saveAllDetails****************")

//     let myPersonalInformation = new PersonalInformation(req.body)
//     let c = await User.findOne({ identity: req.params.id })
//     myPersonalInformation.userId = c._id
//     try {
//         await myPersonalInformation.save();
//         console.log("success saveAllDetails!!");
//         res.status(200).json({ myPersonalInformation });
//     }
//     catch (error) {
//         console.log("failed saveAllDetails!!");
//         console.log("error: " + error);
//         res.status(500).json({ err: error.message })
//     }
// }

module.exports = {
    getPersonalInformation,
    // saveAllDetails
}