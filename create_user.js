const { v4: uuidv4 } = require("uuid");
const { db_link } = require("./environment");
const axios = require("axios");

const create_userLogic = async (name, coins) => {
  const result = await AddToTable(name, coins)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return result;
};

const AddToTable = async (name, coins) => {
  const userId = "U_" + uuidv4();
  const data = await axios
    .post(db_link + "/User", { id: userId, Name: name, default_coins: coins })
    .then((res) => {
      return res.data.id;
    })
    .catch((err) => {
      return err;
    });
  return data;
};
module.exports = create_userLogic;
