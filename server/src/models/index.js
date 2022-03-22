const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  logging: false,
});

async function syncDB() {
  await db.user.sync();
  await db.note.sync();
  await db.comment.sync();
}

fs.readdirSync(__dirname)
  .filter(
    (file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes,
    );
    db[model.name] = model;
  });

syncDB(db);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
