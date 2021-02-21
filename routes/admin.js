const express = require("express");
const path = require("path");

const rootDirect = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootDirect, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;