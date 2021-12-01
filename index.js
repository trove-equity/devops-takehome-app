import express from "express";
import mysql2 from "mysql2";

const {
  DATABASE_NAME,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
} = process.env;

const APP_PORT = 3000;

const db = mysql2.createConnection({
  host: DATABASE_HOST,
  user: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  port: DATABASE_PORT,
});

db.connect((error) => {
  if (error) {
    throw new Error(error);
  }
  console.log("Connected to database");
});

const fetchFromDB = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT id, value FROM \`ping_pong\` WHERE id='${id}'`,
      (error, result) => {
        if (error) {
          reject();
        }
        resolve(result[0].value);
      }
    );
  });
};

const app = express();

app.get("/ping", async (req, res) => {
  const result = await fetchFromDB("ping");
  return res.json({
    ping: result,
  });
});

app.get("/pong", async (req, res) => {
  const result = await fetchFromDB("pong");
  return res.json({
    pong: result,
  });
});

app.listen(APP_PORT, () => {
  console.log(`Server running on port: ${APP_PORT}`);
});
