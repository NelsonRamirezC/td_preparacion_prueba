
import sequelize from "../database/database.js"

const home = async (req, res) => {
    let customers = await sequelize.models.customers.findAll();
    customers = customers.map(customer => customer.toJSON());

    res.render("home", {
        customers
    });
};

let controllers = {
    home,
};

export default controllers;
