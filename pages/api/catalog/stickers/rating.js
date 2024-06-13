const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:hellome@localhost:5432/Booksite');

export default async function handler(req, res) {
  const [products, metadata2] = await sequelize.query(
    'SELECT * from public."product" WHERE foreign_type_id = 4 ORDER BY rating'
    );
  res.send(products);
}