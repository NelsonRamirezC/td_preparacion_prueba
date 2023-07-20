import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class payments extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    customernumber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'customers',
        key: 'customernumber'
      }
    },
    checknumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    paymentdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "payments_pkey",
        unique: true,
        fields: [
          { name: "customernumber" },
          { name: "checknumber" },
        ]
      },
    ]
  });
  }
}
