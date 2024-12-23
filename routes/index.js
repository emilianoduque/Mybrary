import express from "express";

const routerIndex = express.Router();

routerIndex.get("/", (req, res) => {
    res.render("index");
})

export default routerIndex;