const mongoose = require('mongoose');

const PersonalInformationSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    identity: {
        type: Number
    },
    areaCode: {
        type: Number
    },
    pel: {
        type: String,
    },
    email: {
        type: String,
    },
    birthDate: {
        type: String,
    },
    countryOfBirth: {
        type: String,
    },
    citizenship: {
        type: String,
    },
    city: {
        type: String,
        require: true
    },
    street: {
        type: String,
        require: true
    },
    apartmentRegistration: {
        type: Boolean
    },
    propertyCity: {
        type: String,
        require: true
    },
    propertyPrice: {
        type: Number,
        require: true
    },
    propertyMarketValue: {
        type: Number,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
})

module.exports = mongoose.model('PersonalInformation', PersonalInformationSchema)