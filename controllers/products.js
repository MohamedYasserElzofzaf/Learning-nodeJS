const Products = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
    });
};
exports.postAddProduct = (req, res, next) => {
    const product = new Products(req.body.title);
    Products.save();
    res.redirect("/");
};

exports.getProduct = (req, res, next) => {
    const products = Products.fetchAll();
    res.render("shop", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
    });
};