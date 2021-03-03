const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect(
            "mongodb+srv://Mohamed9Yasser:qxRcvxU5eCXPfi2H@cluster0.vtzp8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        )
        .then((client) => {
            console.log("Connected!");
            callback(client);
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = mongoConnect;