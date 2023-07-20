import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class orderdetails extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ordernumber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orders',
        key: 'ordernumber'
      }
    },
    productcode: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'productcode'
      }
    },
    quantityordered: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    priceeach: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    orderlinenumber: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orderdetails',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orderdetails_pkey",
        unique: true,
        fields: [
          { name: "ordernumber" },
          { name: "productcode" },
        ]
      },
    ]
  });
  }
}
