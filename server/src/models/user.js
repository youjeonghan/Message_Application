module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });

  user.associate = (models) => {
    models.user.hasMany(models.note, {
      foreignKey: 'user_id',
    });
  };

  return user;
};
