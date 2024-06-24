const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("connect to DB");
    });
    connection.on("error", (error) => {
      console.log("something is wrong", error);
    });
  } catch (err) {
    console.log("something is wrong ", err);
  }
}
module.exports = connectDB;
