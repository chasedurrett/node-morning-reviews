const users = require("../../users.json");

module.exports = {
  getUsers: (req, res) => {
    res.status(200).send(users);
  },
  getUser: (req, res) => {
    const { user_id } = req.params;
    const user = users.find((element) => element.id === +user_id);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send("User not found :-(");
    }
  },
};
