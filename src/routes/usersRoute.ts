import { Router } from "express";
import { createUser, getUser, getUsers } from "../handlers/usersHandler";
import { isBodyValid } from "../middlewares/userMiddleware";

const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUser);
usersRouter.post('/',isBodyValid, createUser);

export default usersRouter;