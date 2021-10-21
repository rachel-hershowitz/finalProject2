const uploadFile = require("../middleware/upload");
const uploadMid2 = require("../middleware/uploadMid2.middleware");
const fs = require('fs')

const baseUrl = "http://localhost:5000/files/";


const upload = async (req, res) => {

  console.log("upload work!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

  try {
    console.log("try")
    await uploadFile(req, res);
    console.log({ "req.file": req.file })

    if (req.file == undefined) {
      console.log("Please upload a file!")
      return res.status(400).send({ message: "Please upload a file!" });
    }

    funUploadFile()

    res.status(200).send({
      message: "Uploaded the file successfully: ",
      //  + req.file.originalname,
    });
  } catch (err) {
    console.log({ "err": err })
    console.log("Could not upload the file!!!!!")
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};


const funUploadFile = async (req, res) => {

  console.log("funUploadFile")

  try {
    await uploadMid2(req, res);

    console.log(req.file);
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    return res.send(`File has been uploaded.`);
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload image: ${error}`);
  }
};

const getListFiles = (req, res) => {
  console.log("getListFiles work!!")

  const directoryPath = __basedir + "/resources/static/assets/uploads/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {

  console.log("download work!!")

  const fileName = req.params.name;
  const directoryPath = __basedir + "/resources/static/assets/uploads/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};


module.exports = {
  upload,
  getListFiles,
  download,
};