const mongoose = require('mongoose');

const AnswersSchema = mongoose.Schema({
    idAnswer: {
        type: Number,
        require: true
    },
    idQuestion: {
        type: Number,
        require: true
    },
    data: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Answers', AnswersSchema)