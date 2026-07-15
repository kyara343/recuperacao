const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

let db = null;

async function conectarDb() {
  if (!db) {
    db = await open({
      filename: "./src/db/biblioteca.db",
      driver: sqlite3.Database,
    });
    console.log("Banco de dados conectado com sucesso!");
  }
  return db;
}

module.exports = {
  conectarDb,
};