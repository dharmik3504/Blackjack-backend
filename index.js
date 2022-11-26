const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json({ limit: "500mb" }));

const create_userLogic = require("./create_user");
const dealLogic = require("./deal");

const { api_port } = require("./environment");
app.get("/", (req, res) => {
  res.send(res.statusCode);
});
app.post("/api/v1/create_user", async (req, res) => {
  var { name, coins } = req.query;
  const create_userLogicResponse = await create_userLogic(name, coins);
  res.send(create_userLogicResponse);
});
app.post("/api/v1/create_game", (req, res) => {
  var { players, decks } = req.body;
  console.log(players);
  const gameId = "G_" + uuidv4();
  res.send(gameId);
});
app.post("/api/v1/deal", (req, res) => {
  var { id, coins } = req.body;
  const dealResponse = dealLogic(game_id, coins);
  const gameId = "G_" + uuidv4();
  res.send(gameId);
});
app.listen(api_port, () => {
  console.log(`Example app listening at http://localhost:${api_port}`);
});
