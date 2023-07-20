import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _customers from  "./customers.js";
import _employees from  "./employees.js";
import _offices from  "./offices.js";
import _orderdetails from  "./orderdetails.js";
import _orders from  "./orders.js";
import _payments from  "./payments.js";
import _productlines from  "./productlines.js";
import _products from  "./products.js";

export default function initModels(sequelize) {
  const customers = _customers.init(sequelize, DataTypes);
  const employees = _employees.init(sequelize, DataTypes);
  const offices = _offices.init(sequelize, DataTypes);
  const orderdetails = _orderdetails.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const payments = _payments.init(sequelize, DataTypes);
  const productlines = _productlines.init(sequelize, DataTypes);
  const products = _products.init(sequelize, DataTypes);

  orders.belongsToMany(products, { as: 'productcode_products', through: orderdetails, foreignKey: "ordernumber", otherKey: "productcode" });
  products.belongsToMany(orders, { as: 'ordernumber_orders', through: orderdetails, foreignKey: "productcode", otherKey: "ordernumber" });
  orders.belongsTo(customers, { as: "customernumber_customer", foreignKey: "customernumber"});
  customers.hasMany(orders, { as: "orders", foreignKey: "customernumber"});
  payments.belongsTo(customers, { as: "customernumber_customer", foreignKey: "customernumber"});
  customers.hasMany(payments, { as: "payments", foreignKey: "customernumber"});
  customers.belongsTo(employees, { as: "salesrepemployeenumber_employee", foreignKey: "salesrepemployeenumber"});
  employees.hasMany(customers, { as: "customers", foreignKey: "salesrepemployeenumber"});
  employees.belongsTo(offices, { as: "officecode_office", foreignKey: "officecode"});
  offices.hasMany(employees, { as: "employees", foreignKey: "officecode"});
  orderdetails.belongsTo(orders, { as: "ordernumber_order", foreignKey: "ordernumber"});
  orders.hasMany(orderdetails, { as: "orderdetails", foreignKey: "ordernumber"});
  products.belongsTo(productlines, { as: "productline_productline", foreignKey: "productline"});
  productlines.hasMany(products, { as: "products", foreignKey: "productline"});
  orderdetails.belongsTo(products, { as: "productcode_product", foreignKey: "productcode"});
  products.hasMany(orderdetails, { as: "orderdetails", foreignKey: "productcode"});

  return {
    customers,
    employees,
    offices,
    orderdetails,
    orders,
    payments,
    productlines,
    products,
  };
}
