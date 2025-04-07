const express = require("express");
const router = express.Router();
var cors = require("cors");
const app = express();
app.use(cors());
var corsOptions = {
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const cmsController = require("../controllers/cmsController");
router.get("/", cors(corsOptions), cmsController.users);
router.get("/:name", cors(corsOptions), cmsController.users);

module.exports = router;
