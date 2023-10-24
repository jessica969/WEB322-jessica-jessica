const express = require("express");

const app = express();
const port = 3000;
const pageRouter = require("./routes/pages");

//SET THE VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// ROUTE HANDLING
app.use(pageRouter);

// LISTEN FOR REQUESTS!!!!
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
