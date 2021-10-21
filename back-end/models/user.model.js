const mongoose = require('mongoose');

const Status = Object.freeze({
    "A": "לא נפתחה פניה",
    "B": "פניה נפתחה, מחכה לאישור מהיועץ",
    "C": "בטיפול יועץ",
    "D": "צריך שינוי",
    "E": "נשלחה בקשה עקרונית מחכה לאישור",
    "F": "אישור התקבל",
    "G": "אישור לא התקבל",
    "H": "מחכה לחתימה",
    "I": "משכנתא"
});

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
    },
    status: {
        type: String,
        enum: Object.values(Status),
    },
})

Object.assign(UserSchema.statics, {
    Status,
});

module.exports = mongoose.model('User', UserSchema)

// const CustomerModel = mongoose.model('customer', CustomerSchema);
// module.exports = { CustomerModel }