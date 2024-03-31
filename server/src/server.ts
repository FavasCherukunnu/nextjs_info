import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import {connectDB} from './db'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// connecting to database
connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server hahaha");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});