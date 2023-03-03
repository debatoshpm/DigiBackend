require("dotenv").config();
const routes = require("./routes/routes");

const express = require("express");
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://debatoshpm:testing123@cluster0.evbo7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(express.json());

app.use("/api", routes);

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});
