import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class followers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    follow_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    follower_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    following_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'followers',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "follow_id" },
        ]
      },
      {
        name: "follower_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "follower_id" },
          { name: "following_id" },
        ]
      },
      {
        name: "following_id",
        using: "BTREE",
        fields: [
          { name: "following_id" },
        ]
      },
    ]
  });
  }
}
