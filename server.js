const cors = require('cors')
const express = require("express");
const app = express();

console.log("server.js run!!")

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 5000;
app.listen(port, () => {
  console.log(`Running at localhost:5000`);
});