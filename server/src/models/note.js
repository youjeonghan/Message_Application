module.exports = function note(sequelize, DataTypes) {
  return sequelize.define('note', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'user',
      //   key: 'id',
      // },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });
};
