import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class suggestions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    suggestion_id: {
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
    suggested_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'suggestions',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "suggestion_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "suggested_user_id",
        using: "BTREE",
        fields: [
          { name: "suggested_user_id" },
        ]
      },
    ]
  });
  }
}
