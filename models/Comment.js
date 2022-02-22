const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    commentary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id',
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: false,
    modelName: 'comment',
  }
);

module.exports = Comment;
