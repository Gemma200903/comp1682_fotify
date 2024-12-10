import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class photos extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    photo_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'albums',
        key: 'album_id'
      }
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    caption: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'photos',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "photo_id" },
        ]
      },
      {
        name: "album_id",
        using: "BTREE",
        fields: [
          { name: "album_id" },
        ]
      },
    ]
  });
  }
}
