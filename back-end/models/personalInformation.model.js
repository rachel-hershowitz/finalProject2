const mongoose = require('mongoose');

const PersonalInformationSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    salaryYou: {
        type: Number,
        require: true
    },
    salaryZug: {
        type: Number,
        require: true
    },
    adressHouse: {
        type: String,
        require: true
    },
    notes: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('PersonalInformation', PersonalInformationSchema)