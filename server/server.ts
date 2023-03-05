import express, { Express } from "express";
import dotenv from "dotenv";
import { readdirSync } from "fs";
import { join } from "path";
import db from "./app/models";

dotenv.config();

const app: Express = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err: Error) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// require("./app/routes/turorial.routes")(app);

readdirSync(join(__dirname, "./app/routes"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      (file.slice(-3) === ".js" || file.slice(-3) === ".ts")
  )
  .forEach((file) => {
    require(join(__dirname, "./app/routes", file))(app);
  });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
