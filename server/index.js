const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const router = require("./routes/index");
const cookiesParser = require("cookie-parser");
const { app, server } = require("./socket/index");

// CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookiesParser());

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  response.header("Access-Control-Allow-Credentials", "true");
  next();
});

const PORT = process.env.PORT || 8080;

app.get("/", (request, response) => {
  response.json({
    message: "Server running at " + PORT,
  });
});

// API endpoints
app.use("/api", router);

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log("Server running at " + PORT);
  });
});
