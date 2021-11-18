const mongoose = require('mongoose');

const WhichApartment = Object.freeze({
    newApartment: "newApartment",
    discountApartment: "discountApartment",
    oldApartment: "oldApartment"
});

const ApartmentDesignation = Object.freeze({
    SignalApartment: "signalApartment",
    ChangeApartment: "changeApartment",
    MashkantaApartment: "mashkantaApartment"
});

const HowMuchLonger = Object.freeze({
    MonthAndHalf: "monthAndHalf",
    ThreeMonth: "threeMonth",
    BetweenMonthToThreeMonth: "betweenMonthToThreeMonth"
});

const AreaCode = Object.freeze({
    A: "052", B: "053", C: "054", D: "055",
});

const ContinueProcess = Object.freeze({
    detailsApartment1: "detailsApartment1",
    detailsApartment2: "detailsApartment2",
    detailsApartment3: "detailsApartment3",
    detailsApartment4: "detailsApartment4",
    detailsApartment5: "detailsApartment5",
    detailsApartment6: "detailsApartment6",
});

const PersonalInformationSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    whichApartment: {
        type: String,
        enum: Object.values(WhichApartment),
    },
    apartmentDesignation: {
        type: String,
        enum: Object.values(ApartmentDesignation),
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
        type: Number
    },
    contractSign: {
        type: Boolean
    },
    howMuchLonger: {
        type: String,
        enum: Object.values(HowMuchLonger),
    },
    numberOfPartner: {
        type: Number
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
    amount: {
        type: Number,
        require: true
    },
    areaCode: {
        type: String,
        enum: Object.values(AreaCode),
    },
    ContinueProcess: {
        type: String,
        enum: Object.values(AreaCode),
    },
})

Object.assign(PersonalInformationSchema.statics, {
    WhichApartment, ApartmentDesignation, HowMuchLonger, AreaCode
});

module.exports = mongoose.model('PersonalInformation', PersonalInformationSchema)