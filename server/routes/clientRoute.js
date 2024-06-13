const express = require("express");
const Users = require("../models/userName");
const router = express.Router();

router.get("/users/:username/:password", async (req, res) => {
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

router.post("/users/:data", async (req, res) => {
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

    const latestUser = await Users.find().sort({ _id: -1 }).limit(1);

    const newClient = {
      identifier: identifier,
      password: password,
      username:
        latestUser.length > 0
          ? "Alpha-" +
            (parseInt(latestUser[0].username.split("-")[1]) + 1).toString()
          : "Alpha-" + "1001",
    };

    const user = await Users.create(newClient);
    return res.status(201).json(user);
  } catch (error) {
    console.error("Error creating usernames:", error);
    res.status(500).send({ error: "Failed to create usernames" });
  }
});

router.put("/users/:username/:profile", async (req, res) => {
  try {
    const { username, profile } = req.params;

    const updatedUsers = await Users.findOneAndReplace(
      { username: username },
      { $set: { profile: profile } },
      { new: true }
    );

    if (updatedUsers) {
      return res.status(200).send({ message: "Done" });
    } else {
      return res.status(400).send({ message: "No such user" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
