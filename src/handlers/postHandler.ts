import { RequestHandler } from "express";
import { createPost } from "../controllers/postController";


const createPostHandler: RequestHandler = async (req, res) => {
    const { title, body, userId } = req.body;

    try {
        const newPost = await createPost(title, body, userId);
        res.status(201).json(newPost);
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
}

export { createPostHandler }