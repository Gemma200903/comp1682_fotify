import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_settings extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    setting_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    privacy_settings: {
      type: DataTypes.ENUM('public','friends','onlyme'),
      allowNull: true,
      defaultValue: "public"
    },
    notification_settings: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_settings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "setting_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
