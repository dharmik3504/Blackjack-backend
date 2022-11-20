const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json({ limit: "500mb" }));
const port = 3000;
app.get("/", (req, res) => {
  res.send(res.statusCode);
});
app.post("/api/v1/create_user", (req, res) => {
  var { name, coins } = req.query;
  const userId = "U_" + uuidv4();
  res.send(userId);
});
app.post("/api/v1/create_game", (req, res) => {
  var { players, decks } = req.body;
  console.log(players);
  const gameId = "G_" + uuidv4();
  res.send(gameId);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
