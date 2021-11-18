const Message = require('../models/message.model');
const User = require('../models/user.model');

const createMessageByUserId = async (req, res) => {
    console.log("*******createMessageByUserId********createMessageByUserId***********")
    console.log(req.body)
    try {
        let newMessage = new Message(req.body.message)
        let user = await User.findOne({ identity: req.body.id })
        newMessage.userId = user._id
        console.log({ newMessage: newMessage })
        await newMessage.save();
        await User.findByIdAndUpdate(user._id, { $push: { messages: newMessage._id } })
        console.log("success create new message!!");
        res.status(200).json({ newMessage });
    }
    catch (error) {
        console.log("failed create new message!!");
        console.log({ error: error });
        // console.log("error: " + error);
        res.status(500).json({ err: error.message })
    }
}

const getListMessagesOfCurrentUser = async (req, res) => {
    console.log("getListMessageOfCurrentUser")
    console.log(req.params)
    try {
        let user = await User.findOne({ identity: req.params.id })
        console.log(user)
        let messages = await Message.find({ userId: user._id })
        console.log({ messages: messages })
        return res.status(200).json(messages)
    }
    catch (error) {
        console.log("failed getListMessageOfCurrentUser")
    }
}

module.exports = {
    createMessageByUserId,
    getListMessagesOfCurrentUser
}