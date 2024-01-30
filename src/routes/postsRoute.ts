import { Router, Request, Response } from "express";
import { createPostHandler } from "../handlers/postHandler";

const postsRouter = Router();

postsRouter.get('/', (req: Request, res: Response) => {
    res.status(200).send("hola el mundo desde posts");
})
postsRouter.post('/', createPostHandler)

export default postsRouter;