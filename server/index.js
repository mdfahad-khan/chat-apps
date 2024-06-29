const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const connectDB = require("./config/connectDB");
const router = require("./routes/index");
const cookiesParser = require("cookie-parser");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookiesParser);
const PORT = process.env.PORT || 8080;
app.get("/", (request, response) => {
  response.json({
    message: "server is running at " + PORT,
  });
});
app.use("/api", router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server running at " + PORT);
  });
});
