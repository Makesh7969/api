const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const PORT = 3000;
require('dotenv').config();

app.use(express.json());
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running at ${process.env.APP_URL}:${PORT}`);
});
