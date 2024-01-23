const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  console.log("connecting to database...");
  let uri = process.env.URI;
  uri = uri.replace("<username>", process.env.DB_NAME);
  uri = uri.replace("<password>", process.env.DB_PASS);
  await mongoose.connect(uri, { dbName: "EchoScript" });
  console.log("connected to database!!!");
};

module.exports = connectDB