const express = require("express");
const router = express.Router();

// Importing the localFileUpload function from the fileUpload controller
const { localFileUpload } = require("../controllers/fileUpload");

// Defining API routes
router.post("/localFileUpload", localFileUpload);

// Exporting the router
module.exports = router;
 