const express = require("express");
const connectDB = require("./db/connectDB");
const applyMiddleware = require("./middlewares/applyMiddleware");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const getAllArticle = require("./routes/article/index")
const addAUser = require("./routes/user/index")

// middlewares
applyMiddleware(app)

// routes
app.use(getAllArticle);
app.use(addAUser);

app.get("/", (req, res) => {
  res.send("EchoScript is running...");
});

app.all("*", (req, res, next) => {
  const error = new Error(`the requested url is invalid ${req.url}`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`EchoScript is running on port ${port}`);
  });
};

main()
