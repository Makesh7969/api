const express = require("express");
const router = express.Router();

const usersRouter = require("./user");

router.get("/", (req, res) => {
  res.json({ title: "App Server started successfully" });
});

router.use("/users", usersRouter);

module.exports = router;
