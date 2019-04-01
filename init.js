import app from "./App";
import "./db";

const PORT = 3000;

const handleListening = () => {
  console.log(`Listening on ${PORT}`);
};

app.listen(PORT, handleListening);
