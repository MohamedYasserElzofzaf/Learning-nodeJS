const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const adminConnection = require("./routes/admin");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminConnection);

app.use("/", (req, res, next) => {
    console.log("in another middleware!");
    res.send("<h1>Are you somewhere feeling lonely?!</h1>");
});
app.listen(3000);