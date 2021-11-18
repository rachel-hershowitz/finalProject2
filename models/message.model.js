const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    dataMessage: {
        type: String
    },
    fromCustomer: {
        type: Boolean
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model('Message', MessageSchema)