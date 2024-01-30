import { Request, Response } from "express";
import { 
    getAllUsers,
    searchByName,
    getUserById,
    createUserData } from "../controllers/userController";

const getUsers = async (req: Request, res: Response) => {
    const { name } = req.query;
    const results = name ? await searchByName(name) : await getAllUsers();
    res.status(200).json(results)
}

const getUser = async (req: Request, res: Response) => {
    const { id }: any = req.params;
   // const numberId = Number(id);
    const source =  isNaN(id) ? "db" : "api";
    try {
        const user = await getUserById(id, source)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error})
    }
    
}

const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, phone } = req.body;
        const newUser = await createUserData(name, email, phone);
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json(error)
    }
    
}

export {
    getUsers,
    getUser,
    createUser
}