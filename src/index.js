const express = require("express");
const path = require("path");

const app = express();

const publicDirPath = path.join(__dirname, "../public");
const port = 3000;

app.use(express.static(publicDirPath));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
