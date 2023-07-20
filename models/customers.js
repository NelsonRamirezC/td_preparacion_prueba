import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class customers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    customernumber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    },
    customername: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    contactlastname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    contactfirstname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    addressline1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    addressline2: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null
    },
    postalcode: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: null
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    salesrepemployeenumber: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      references: {
        model: 'employees',
        key: 'employeenumber'
      }
    },
    creditlimit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null
    }
  }, {
    sequelize,
    tableName: 'customers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customers_pkey",
        unique: true,
        fields: [
          { name: "customernumber" },
        ]
      },
    ]
  });
  }
}
