const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://tarun:123@atlascluster.5m6vrey.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log("Connection error ", err);
      throw err;
    });
};

const getDB = () => {
  if (_db) {
    return _db;
  }

  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
