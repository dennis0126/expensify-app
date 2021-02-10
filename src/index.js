const express = require("express");
const path = require("path");

const app = express();

const publicDirPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicDirPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicDirPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
