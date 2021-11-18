const Question = require('../models/question.model');
const Answer = require('../models/answer.model');

const getAllQuestions = async (req, res) => {
    console.log("***********getAllQuestions*************");
    try {
        let questions = await Question.find()
        console.log(questions);
        if (questions == null) {
            res.send("could not have questions");
        }
        return res.status(200).json(questions)
    }
    catch (error) {
        return res.status(500).json({ myMessage: error.message })
    }
}

const getAllAnswers = async (req, res) => {
    console.log("***********getAllAnswers*************");
    try {
        let Answers = await Answer.find()
        console.log(Answers);
        if (Answers == null) {
            res.send("could not have Answers");
        }
        return res.status(200).json(Answers)
    }
    catch (error) {
        return res.status(500).json({ myMessage: error.message })
    }
}

module.exports = {
    getAllQuestions,
    getAllAnswers,
}