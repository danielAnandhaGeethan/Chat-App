const express = require("express");
const Users = require("../models/userName");
const router = express.Router();

router.get("/clients/:username/:password", async (req, res) => {
  try {
    const { username, password } = req.params;

    const client = await Users.findOne({
      username,
      password,
    });

    if (client) {
      return res.status(200).json(client);
    } else {
      return res.status(400).send({ message: "No such user" });
    }
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
});

router.post("/usernames/:data", async (req, res) => {
  try {
    const data = req.params.data.split(",");

    const identifier = data[0];
    const password = data[1];

    const client = await Users.find({
      identifier: identifier,
    });

    if (client.length > 0) {
      return res.status(500).send({
        message: "User Already Exists",
      });
    }

    collection
      .find()
      .sort({ _id: -1 })
      .limit(1)
      .toArray(async (err, documents) => {
        if (err) {
          console.error(err);
        } else {
          const newClient = {
            identifier: identifier,
            password: password,
            username:
              documents.length > 0
                ? "Alpha-" +
                  (parseInt(documents[0].split("-")[1]) + 1).toString()
                : "Alpha-" + "1001",
          };

          const user = await Users.create(newClient);
          return res.status(201).json(user);
        }
      });
  } catch (error) {
    console.error("Error creating usernames:", error);
    res.status(500).send({ error: "Failed to create usernames" });
  }
});

module.exports = router;
