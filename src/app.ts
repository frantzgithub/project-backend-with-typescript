import express from "express";
import morgan from "morgan";
import mainRouter from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(mainRouter);

export default app;