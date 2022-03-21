module.exports = (sequelize, DataTypes) => {
  const note = sequelize.define('note', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });

  note.associate = (models) => {
    models.note.belongsTo(models.user, {
      foreignKey: 'id',
    });
  };

  return note;
};
