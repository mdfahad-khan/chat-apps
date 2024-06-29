const { response } = require("express");

async function updateUserDetails(req, res) {
  try {
  } catch (err) {
    return response.status(500).json({
      message: err.message,
    });
  }
}
