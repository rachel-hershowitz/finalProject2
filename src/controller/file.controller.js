const uploadFile = require("../middleware/upload");
const uploadMid2 = require("../middleware/uploadMid2.middleware");
const fs = require('fs')

const baseUrl = "http://localhost:5000/files/";

const upload = async (req, res) => {
  console.log("upload files work!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  try {
    console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
    await uploadFile(req, res);
    if (req.file == undefined) {
      console.log("Please upload a file!")
      return res.status(400).send({ message: "Please upload a file!" });
    }
    funUploadFile()
    res.status(200).send({ message: "Uploaded the file successfully" })
  }
  catch (err) {
    console.log({ "err": err })
    console.log("Could not upload the file!!!!!")
    res.status(500).send({ message: `Could not upload the file: ${req.file.originalname}. ${err}` });
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

  const directoryPath = __basedir + "/resources/static/assets/uploads/" + req.params.id;

  if (fs.existsSync(directoryPath)) {
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        res.status(500).send({ message: "Unable to scan files!", });
      }

      let fileInfos = [];
      // if (files) {
      files.forEach((file) => {
        fileInfos.push({
          name: file,
          url: baseUrl + req.params.id + "/" + file,
        });
      });
      // }
      res.status(200).send(fileInfos);
    });
  } else {
    console.log('Directory not found.');
  }


};

const deleteFile = (req, res) => {

  console.log("--------------deleteFile-------------");
  console.log({ "req.params.name": req.params.name });
  console.log({ "req.params.id": req.params.id });
  console.log({ "req.params": req.params });
  try {
    fs.unlinkSync(__basedir + "/resources/static/assets/uploads/" + req.params.id + "/" + req.params.name)
    console.log("success delete");
    return res.status(200).send("success delete")
  }
  catch (err) {
    console.log("not success delete");
    res.status(500).send("not success delete")
  }

}

const download = (req, res) => {
  console.log("download work!!")

  console.log({ req: req })
  console.log({ "req.params.name": req.params.name })
  const fileName = req.params.name;
  const directoryPath = __basedir + `/resources/static/assets/uploads/${req.params.id}/`;
  console.log(res)

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      console.log({ "error": err });
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
    else {
      console.log("success download!!!");
    }
  });
};

module.exports = {
  upload,
  getListFiles,
  deleteFile,
  download,
};