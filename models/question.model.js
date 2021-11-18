const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    data: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Question', QuestionSchema)