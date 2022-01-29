const express = require("express");
const router = express.Router();

router.post("/upload", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
