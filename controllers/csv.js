const csv = require("csvtojson");

exports.csvHandel = (req, res) => {
  // console.log("/api/v1/csv-parse/upload");
  if (!!req.files) {
    // console.log(req.files.csvFile.data.toString());
    csv()
      .fromString(req.files.csvFile.data.toString())
      .then((jsonObj) => {
        return res.send(jsonObj);
      });
  } else {
    return res.status(400).json({
      err: "No file is uploaded",
    });
  }
};
