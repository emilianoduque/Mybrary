import dontev from "dotenv";
if(process.env.NODE_ENV !== "production"){
    dontev.config();
}

import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import routerIndex from "./routes/index.js";
import mongoose from "mongoose";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout", "layouts/layout");

app.use(expressEjsLayouts);
app.use(express.static("public"));

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"))

app.use("/", routerIndex)

app.listen(process.env.PORT || 3000);