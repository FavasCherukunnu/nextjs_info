import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {connectDB} from './db'
import { userRouter } from "./controller/user.controller";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/user',userRouter)
// connecting to database
connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server hahaha");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});