const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json({ limit: "500mb" }));
const { api_port } = require("./environment");

const create_userLogic = require("./logic/create_user");
const create_gameLogic = require("./logic/create_game");
const dealLogic = require("./logic/deal");

app.get("/", (req, res) => {
  res.send(res.statusCode);
});
app.post("/api/v1/create_user", async (req, res) => {
  var { name, coins } = req.query;
  const create_userLogicResponse = await create_userLogic(name, coins);
  res.send(create_userLogicResponse);
});
app.post("/api/v1/create_game", async (req, res) => {
  var { players, decks } = req.body;
  try {
    const create_gameLogicResponse = await create_gameLogic(players, decks);
    res.send(create_gameLogicResponse);
  } catch (err) {
    res.send(err.message);
  }
});
app.post("/api/v1/deal", (req, res) => {
  var { game_id, coins } = req.body;
  const dealResponse = dealLogic(game_id, coins);
  const gameId = "G_" + uuidv4();
  res.send(gameId);
});
app.post("/api/v1/insurance", (req, res) => {
  var { id, coins } = req.body;
  const dealResponse = dealLogic(game_id, coins);
  const gameId = "G_" + uuidv4();
  res.send(gameId);
});

app.post("/api/v1/hit", (req, res) => {
  var { id, coins } = req.body;
  const dealResponse = dealLogic(game_id, coins);
  const gameId = "G_" + uuidv4();
  res.send(gameId);
});

app.post("/api/v1/stand", (req, res) => {
  var { id, coins } = req.body;
  const dealResponse = dealLogic(game_id, coins);
  const gameId = "G_" + uuidv4();
  res.send(gameId);
});
app.post("/api/v1/double_down", (req, res) => {
  var { id, coins } = req.body;
  const dealResponse = dealLogic(game_id, coins);
  const gameId = "G_" + uuidv4();
  res.send(gameId);
});
app.post("/api/v1/split", (req, res) => {
  var { id, coins } = req.body;
  const dealResponse = dealLogic(game_id, coins);
  const gameId = "G_" + uuidv4();
  res.send(gameId);
});
app.post("/api/v1/game_status", (req, res) => {
  var { id, coins } = req.body;
  const dealResponse = dealLogic(game_id, coins);
  const gameId = "G_" + uuidv4();
  res.send(gameId);
});
app.post("/api/v1/winner", (req, res) => {
  var { id, coins } = req.body;
  const dealResponse = dealLogic(game_id, coins);
  const gameId = "G_" + uuidv4();
  res.send(gameId);
});
app.post("/api/v1/finish_game", (req, res) => {
  var { id, coins } = req.body;
  const dealResponse = dealLogic(game_id, coins);
  const gameId = "G_" + uuidv4();
  res.send(gameId);
});
app.listen(api_port, () => {
  console.log(`Example app listening at http://localhost:${api_port}`);
});
