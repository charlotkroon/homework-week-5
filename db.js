const Sequelize = require("sequelize");
const databaseURL =
  process.env.DATABASE_URL || "HAVE TO MAKE THISAJIEFJAWOIEFJOAOIWA";
const db = new Sequelize(databaseURL);

db.sync()
  .then(() => console.log("Database schema updated"))
  .catch(console.error);

module.exports = db;
