import { Router } from "express";
import usersRouter from "./usersRoute";
import postsRouter from "./postsRoute";

const mainRouter = Router();

mainRouter.use('/users', usersRouter);
mainRouter.use('/posts', postsRouter);

export default mainRouter;