require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();

const csvRoute = require("./routers/csv.js");
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/v1/csv-parse", csvRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
