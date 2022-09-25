const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || "8080";
const entryRoutes = require("./src/routes/diary");

app.use(express.json());
app.use(cors());
app.use("/api", entryRoutes);

app.get("/", function (req, res) {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Your server is ready and listening at port ${PORT}`);
});

module.exports = app;
