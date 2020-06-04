const express = require("express");
const config = require("./config");
import serverRender from "./renderers/server";
import { data } from "./testData.json";

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const initialContent = await serverRender();
  res.render("index", Object.assign({}, initialContent));
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(config.port, function listenHandler() {
  console.info(`listening on http://localhost:${config.port}...`);
});
