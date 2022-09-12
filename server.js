const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || "8080";

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Your server is single and ready to mingle at port ${PORT}`);
});
