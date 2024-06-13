const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:hellome@localhost:5432/Booksite');

export default async function handler(req, res) {
    const idid = req.id;

  const [series, metadata] = await sequelize.query(
    `SELECT * from public."series"`
    );

  const [painters, metadata2] = await sequelize.query(
    'SELECT * from public."painters"'
    );

  const fl = [...series, ...painters];
  res.send("Hi!");
}