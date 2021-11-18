const PersonalInformation = require('../models/personalInformation.model');
const User = require('../models/user.model');

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

const getDetailsOfCurrentCustomer = async (req, res) => {
    console.log("***********getDetailsOfCurrentCustomer*************");
    try {
        console.log({ "%%%%%%%%%%%%req.params.id": req.params.id });
        let user = await User.findOne({ identity: req.params.id })
        console.log({ "user": user });
        let details = await PersonalInformation.findOne({ userId: user._id })
        console.log({ "details": details });
        return res.status(200).json(details)
        //     if (info == null) {
        //         res.send("could not have info");
        //     }
        //     return res.status(200).json(info)
    }
    catch (error) {
        console.log({ "error": error })
        return res.status(500).json({ myMessage: error.message })
    }
}

module.exports = {
    getPersonalInformation,
    getDetailsOfCurrentCustomer
}