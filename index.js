require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const upload = require("express-fileupload");

// Routes
const csvRoute = require("./routers/csv");

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(upload());

// Routes
app.use("/api/v1/csv-parse", csvRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});