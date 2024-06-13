const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:hellome@localhost:5432/Booksite');

export default async function handler(req, res) {
  const [types, metadata] = await sequelize.query(
    'SELECT * from public."type_of_product"'
    );

  const [products, metadata2] = await sequelize.query(
    'SELECT * from public."product"'
    );

  const fl = [...types, ...products];
  res.send(products);
}