const util = require("util");
const multer = require("multer");
const { findOne } = require("../../models/user.model");
const maxSize = 4 * 1024 * 1024;
// const MongoClient = require('mongodb').MongoClient;
// const Binary = require('mongodb').Binary;
const fs = require('fs')
// const data = fs.readFileSync(file_path);
// const insert_data = {};
// insert_data.file_data = Binary(data);

console.log("middleware")

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("destination");
    console.log({ "req.params.id": req.params.id })
    let id = req.params.id

    fs.mkdir(`./resources/static/assets/uploads/${id}`, function (err) {
      // if (err) { console.log(err) }
      // else { console.log("New directory successfully created.") }
    })

    cb(null, __basedir + `/resources/static/assets/uploads/${id}/`);
  },
  filename: (req, file, cb) => {
    console.log({ "filename": file.originalname });
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

console.log("upload.js")

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;