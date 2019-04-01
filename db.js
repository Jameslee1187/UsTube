import mongoose from "mongoose";

mongoose.connect(
  "mongodb://localhost:27017/ustube",
  { useNewUrlParser: true, useFindAndModify: false }
);

const db = mongoose.connection;

const handleOpen = () => {
  console.log("hey");
};

const handleError = () => {
  console.log("error");
};

db.once("open", handleOpen);
db.on("error", handleError);
