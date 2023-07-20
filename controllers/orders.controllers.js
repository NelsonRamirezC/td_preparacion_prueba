import sequelize from "../database/database.js";
import moment from "moment";
import { Op } from "sequelize";

const filterOrders = async (req, res) => {
    let parametros = req.body;

    let filtros = {};

    for (const key in parametros) {
        if (key == "status") {
            filtros.status = {
                [Op.eq]: parametros[key],
            };
        }
    }

    try {
        let orders = await sequelize.models.orders.findAll({
            where: filtros,
        });

        orders = orders.map((order) => order.toJSON());

        //obtener opciones de los status ingresados en la base
        let [rows] = await sequelize.query(
            "select distinct status from orders"
        );

        //filtrar por fecha de orden
        if (parametros.orderdate)
            orders = orders.filter((order) => {
                order.orderdate = String(order.orderdate);
                if (order.orderdate.includes(parametros.orderdate.trim())) {
                    return order;
                }
            });
        //filtro por fecha required
        if (parametros.requireddate)
            orders = orders.filter((order) => {
                order.requireddate = String(order.requireddate);
                if (
                    order.requireddate.includes(parametros.requireddate.trim())
                ) {
                    return order;
                }
            });
        //filtro fecha despacho
        if (parametros.shippeddate)
            orders = orders.filter((order) => {
                order.shippeddate = String(order.shippeddate);
                if (order.shippeddate.includes(parametros.shippeddate.trim())) {
                    return order;
                }
            });

        console.log(rows);
        res.status(200).json({ code: 200, message: "ok", orders });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "Error al procesar la solicitud.",
        });
    }
};

let controllers = {
    filterOrders,
};

export default controllers;
