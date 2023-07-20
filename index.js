import sequelize from "./database/database.js";
import app from "./app.js";

import initModels from "./models/init-models.js";

initModels(sequelize);

const PORT = 3000;

const main = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT);
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log(error);
    }
};

main();
