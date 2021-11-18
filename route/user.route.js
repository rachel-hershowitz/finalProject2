const router = require('express').Router();
const userController = require('../controllers/user.controller')
const questionController = require('../controllers/question.controller')
const personalInformationController = require('../controllers/personalInformation.controller')
const fileController = require('.././src/controller/file.controller')
const messageController = require('../controllers/message.controller')

console.log("user-route")
console.log("user-route")


// upload
router.post("/upload/:id", fileController.upload);
router.get("/files/:id", fileController.getListFiles);
router.get("/files/:id/:name", fileController.download);
router.delete("/files/delete/:name/:id", fileController.deleteFile);

// user
router.post('/sign', userController.sign)
router.get('/getAllCustomer', userController.getAllCustomer)
router.post('/checkLogin', userController.checkLogin)
router.delete('/deleteCustomer/:id', userController.deleteCustomer)

// questions //answers
router.get('/getAllQuestions', questionController.getAllQuestions)
router.get('/getAllAnswers', questionController.getAllAnswers)

//createConnectionUser
router.post('createConnectionUser',)
router.post('/saveAllDetails', userController.saveAllDetails)

//createUserDetails
router.post('/saveAllDetails/:id', userController.saveAllDetails)

//getPersonalInformation
router.get('/getPersonalInformation', personalInformationController.getPersonalInformation)
router.get('/getDetailsOfCurrentCustomer/:id', personalInformationController.getDetailsOfCurrentCustomer)

//message
router.post('/createMessageByUserId', messageController.createMessageByUserId)
router.get('/getListMessagesOfCurrentUser/:id', messageController.getListMessagesOfCurrentUser)


module.exports = router;