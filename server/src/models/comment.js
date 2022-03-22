module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    noteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
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

  comment.associate = (models) => {
    models.comment.belongsTo(models.note, {
      foreignKey: 'noteId',
      onDelete: 'cascade',
    });
    models.comment.belongsTo(models.user, {
      foreignKey: 'userId',
    });
  };

  return comment;
};
