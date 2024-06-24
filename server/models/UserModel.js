const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "provide name"],
    },
    email: {
      type: String,
      require: [true, "provide email"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "provide password"],
      select: false,
    },
    profile_pic: {
      type: String,
      default: "https://res.cloudinary.com/dzcmadjlw/image/upload/v164372",
    },
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
