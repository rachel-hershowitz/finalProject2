const router = require('express').Router();

// שמות הקונטרולרים שנשתמש בהם
const userController = require('../controllers/user.controller')
const questionController = require('../controllers/question.controller')
const personalInformation = require('../controllers/personalInformation.controller')

console.log("user-route")

// user
router.post('/sign', userController.sign)
router.get('/getAllCustomer', userController.getAllCustomer)
router.post('/checkLogin', userController.checkLogin)

// questions //answers
router.get('/getAllQuestions', questionController.getAllQuestions)
router.get('/getAllAnswers', questionController.getAllAnswers)

//createConnectionUser
router.post('createConnectionUser',)

//createUserDetails
router.post('/createUserDetails/:id', userController.createUserDetails)

//getPersonalInformation
router.get('/getPersonalInformation', personalInformation.getPersonalInformation)

module.exports = router;