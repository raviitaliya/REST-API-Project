import express from "express";
import multer from "multer";

const fileUplode = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads') 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  }
});

const upload = multer({ storage: storage });

fileUplode.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});


export default fileUplode;