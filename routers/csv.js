const express = require("express");
const router = express.Router();

// controller
const { csvHandel } = require("../controllers/csv");

router.post("/upload", csvHandel);

module.exports = router;