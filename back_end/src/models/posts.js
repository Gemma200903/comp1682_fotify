import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class posts extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    post_id: {
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    privacy_setting: {
      type: DataTypes.ENUM('public','friends','onlyme'),
      allowNull: true,
      defaultValue: "public"
    }
  }, {
    sequelize,
    tableName: 'posts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "post_id" },
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
