const { connected } = require("process");

const express = require("express");
const router = express.Router();
router.get("/add-product", (req, res, next) => {
    console.log("in the middleware!");
    res.send("<h1>Hello is it me you looking for!!!</h1>");
});
router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});
module.exports = router;