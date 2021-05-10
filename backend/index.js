import "./env/setupEnv.js";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import apiRouter from "./routers/api.js";

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDirPath = path.join(__dirname, "../frontend/dist");
const port = process.env.PORT || 3000;

// set public path
app.use(express.static(publicDirPath));

// Body Parser
app.use(bodyParser.json());

// api router
app.use("/api/v1", apiRouter);

// use get * for frontend routing
app.get("/web", (req, res) => {
  res.sendFile(path.join(publicDirPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
