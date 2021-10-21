const router = require('express').Router();

// שמות הקונטרולרים שנשתמש בהם
const userController = require('../controllers/user.controller')
const questionController = require('../controllers/question.controller')
const personalInformationController = require('../controllers/personalInformation.controller')
const fileController = require('.././src/controller/file.controller')

console.log("user-route")

// upload
router.post("/upload", fileController.upload);
router.get("/files", fileController.getListFiles);

// user
router.post('/sign', userController.sign)
router.get('/getAllCustomer', userController.getAllCustomer)
router.post('/checkLogin', userController.checkLogin)

// questions //answers
router.get('/getAllQuestions', questionController.getAllQuestions)
router.get('/getAllAnswers', questionController.getAllAnswers)

//createConnectionUser
router.post('createConnectionUser',)
// router.post('/saveAllDetails', personalInformationController.saveAllDetails)
router.post('/saveAllDetails', userController.saveAllDetails)

//createUserDetails
// router.post('/createUserDetails/:id', userController.createUserDetails)
router.post('/saveAllDetails/:id', userController.saveAllDetails)

//getPersonalInformation
router.get('/getPersonalInformation', personalInformationController.getPersonalInformation)

module.exports = router;