import express, { Express } from "express";
import dotenv from "dotenv";
import sequelize from "./app/sequelize/sequelize";
import ServerRoutes from "./app/server-addons/server.routes";

dotenv.config();

const app: Express = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err: Error) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelizeConnection.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


ServerRoutes.configureRoutes(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
