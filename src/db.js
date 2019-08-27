const mongoose = require("mongoose");

const connectToDB = (url = "mongodb://localhost/done") => {
  mongoose.connect(url, { useNewUrlParser: true });
  mongoose.set("useCreateIndex", true);
  return mongoose;
};

module.exports = connectToDB;
