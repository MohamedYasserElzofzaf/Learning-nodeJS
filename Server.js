const express = require("express");

const app = express();
app.use("/add", (req, res, next) => {
    console.log("in the middleware!");
    res.send("<h1>Hello is it me you looking for!!!</h1>");
    next();
});
app.use("/", (req, res, next) => {
    console.log("in another middleware!");
    res.send("<h1>Are you somewhere feeling lonely?!</h1>");
});
app.listen(3000);