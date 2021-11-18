const mongoose = require('mongoose');

const Status = Object.freeze({
    "a": "לא נפתחה פניה",
    "b": "פניה נפתחה, מחכה לאישור מהיועץ",
    "c": "בטיפול יועץ",
    "d": "צריך שינוי",
    "e": "נשלחה בקשה עקרונית מחכה לאישור",
    "f": "אישור התקבל",
    "g": "אישור לא התקבל",
    "h": "מחכה לחתימה",
    "j": "משכנתא"
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
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }]
})

Object.assign(UserSchema.statics, {
    Status,
});

module.exports = mongoose.model('User', UserSchema)