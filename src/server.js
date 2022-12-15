require("dotenv").config()
const express = require( "express");
const viewEngine =require("./config/viewEngine");
const initWebRoute =require("./routes/web");
const bodyParser =require("body-parser");

const app = express();
const port = process.env.PORT || 8000

viewEngine(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

initWebRoute(app)

app.listen(port, ()=> {
    console.log(`App is running on port ${port}`)
})