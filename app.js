import express from "express";
import { create } from "express-handlebars";
import upload from "express-fileupload";
import cors from "cors";
import morgan from "morgan";
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import viewsRoutes from "./routes/views.routes.js";

const app = express();


//middlewares generales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));
app.use(upload());


//consiguración handlebars

const hbs = create({
    partialsDir: [path.resolve(__dirname, "./views/partials/")],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

//VIEWS ROUTES
app.use("/", viewsRoutes);

export default app;