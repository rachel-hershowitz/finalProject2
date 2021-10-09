const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    identity: {
        type: Number,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    cellPhone: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isCustomer: {
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model('User', UserSchema)

// const CustomerModel = mongoose.model('customer', CustomerSchema);
// module.exports = { CustomerModel }