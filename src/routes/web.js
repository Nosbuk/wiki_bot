const express = require( "express");
const homePageControler = require("../controllers/homepageController")
const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", homePageControler.getHomepage)
    return app.use("/", router)
}

module.exports = initWebRoutes