const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const env = require('dotenv');
const rout = require('./route/user.route');
const jwt = require('jsonwebtoken');
const request = require('request')
const cors = require('cors')

global.__basedir = __dirname;

app.use(express.json())
// app.use(bodyParser.json());
console.log("app.js")
env.config();
app.use(cors())
app.use('/', rout)


const connectionParams = {
    useFindAndModify: true,
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
}

mongoose.connect(
    process.env.DB_CONNECT, connectionParams).then(() => {
        console.log("connected DB");
    })
    .catch((err) => console.log({ "err-mongoose": err })
    );

// jwt
// const func = () => {

//     // יצירת מחרוזת סודית
//     let token = jwt.sign({ name: "esther", password: "9874" }, process.env.SECRET)
//     console.log("token==========", token);

//     // פיענוח
//     let decoded = jwt.verify(token, process.env.SECRET)
//     console.log(decoded)
// }
// func()

app.listen(5000, function () {
    console.log('I listening in port 5000');
})
