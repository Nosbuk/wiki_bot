import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 8000

viewEngine(app)

initWebRoute(app)

app.listen(port, ()=> {

})