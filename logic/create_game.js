const { v4: uuidv4 } = require("uuid");
const { db_link } = require("./environment");

const axios = require("axios");

const create_gameLogic = async (players, decks) => {
  const result = await AddToTable(players, decks)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
  return result;
};

const AddToTable = async (players, decks) => {
  const gameId = "G_" + uuidv4();
  const data = await axios
    .post(db_link + "/Game", { id: gameId, decks: decks, UserId: players })
    .then((res) => {
      return res.data.id;
    })
    .catch((err) => {
      return err;
    });
  return data;
};
module.exports = create_gameLogic;
