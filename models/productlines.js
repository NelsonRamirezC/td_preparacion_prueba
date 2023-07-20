import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class productlines extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    productline: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    textdescription: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      defaultValue: "NULL"
    },
    htmldescription: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productlines',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "productlines_pkey",
        unique: true,
        fields: [
          { name: "productline" },
        ]
      },
    ]
  });
  }
}
