import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import customerController from "./controllers/customer";
import deviceController from "./controllers/device";
import usageController from "./controllers/usage";

const app: Express = express();

mongoose.connect("mongodb+srv://kasparpedaja:xUPGzzR8dd8ovibo@cluster0.eqhmnxq.mongodb.net/test")

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', customerController);
app.use('/', deviceController);
app.use('/', usageController);

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});