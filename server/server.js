require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

//config database
const connect = require('./db/database');
connect();

//config body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//config file-uploaded
app.use(
    fileUpload({
      debug: true,
      useTempFiles: true,
      tempFileDir: path.join(__dirname, "./tmp"),
    })
)

//config static-files
app.use(express.static("uploads"));

//config routes
const router = require('./routes/routes');
app.use('/api/v1/students', router);


const server = app.listen(PORT, () => {
    console.log(`server running on port number ${PORT}`);
});