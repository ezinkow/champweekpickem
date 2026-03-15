require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./routes/picks-api-routes.js")(app);
require("./routes/games-api-routes.js")(app);
require("./routes/users-api-routes.js")(app);
require("./routes/standings-api-routes.js")(app);
require("./routes/scoreboard-api-routes.js")(app);
require("./routes/adminRefreshGames.js")(app);
require("./routes/picksdisplay-api-routes.js")(app);
require("./routes/tiebreaker-api-routes.js")(app);

const syncGames = require("./services/sync.js");
const lockLines = require("./jobs/lockLines");

async function runSync() {
  try {
    await syncGames();
    await lockLines();
  } catch (err) {
    console.error("Background job failed:", err);
  }
}

runSync();
setInterval(runSync, 15 * 60 * 1000);

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});