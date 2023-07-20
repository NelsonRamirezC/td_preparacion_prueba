import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class offices extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    officecode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    city: {
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
      defaultValue: "NULL"
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "NULL"
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    postalcode: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    territory: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'offices',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "offices_pkey",
        unique: true,
        fields: [
          { name: "officecode" },
        ]
      },
    ]
  });
  }
}
