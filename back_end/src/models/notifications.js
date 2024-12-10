import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class notifications extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    notification_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    receiver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    type: {
      type: DataTypes.ENUM('friend_request','post_like','comment','follow'),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_read: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'notifications',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "notification_id" },
        ]
      },
      {
        name: "receiver_id",
        using: "BTREE",
        fields: [
          { name: "receiver_id" },
        ]
      },
      {
        name: "sender_id",
        using: "BTREE",
        fields: [
          { name: "sender_id" },
        ]
      },
    ]
  });
  }
}
