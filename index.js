const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use("/", router)

app.listen(process.env.APP_PORT, function (){
    console.log(`Server berjalan di http://localhost:${process.env.APP_PORT}`)
});

module.exports = app;