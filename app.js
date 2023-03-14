import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { router } from "./routes/todoroutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("DB is connected..."))
.catch((err) => console.log(err));

app.use(router);

let port = process.env.PORT;
if(port == null || port == ""){
    port = 8000;
}

app.listen(port, () => console.log("server is running on port 8000"));