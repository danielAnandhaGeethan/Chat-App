const mongoose = require("mongoose");

const UsernameSchema = new mongoose.Schema({
  identifier: {
    type: String,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
  },
});

const Usernames = mongoose.model("Users", UsernameSchema);

module.exports = Usernames;
