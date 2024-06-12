const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const clientRoute = require("./routes/clientRoute");

PORT = 5555;
MONGO_URL =
  "mongodb+srv://Daniel:20bai1111@Chat-App.bk1vhhz.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to the App");
});

app.use("/", clientRoute);

mongoose
  .connect(MONGO_URL)
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB Atlas:", err);
    process.exit(1);
  });
