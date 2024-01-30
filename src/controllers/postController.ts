import { Post } from "../db";

const createPost = async (title: string, body: string, userId: string) => {
    const newPost: any = await Post.create({title, body});
    await newPost.setUser(userId);
    return newPost;
}

export { createPost }