import { User, Post } from "../db";
import axios from "axios";


const cleanArray = (arr: {id: number, name: string, phone: string} []) => 
    arr.map((elem) => {
        return {
        id: elem.id,
        name: elem.name,
        phone: elem.phone,
        created: false
    }
    })

const getAllUsers = async () => {
    const databaseUser = await User.findAll();

    const cleanArrayRow = (await axios.get("https://jsonplaceholder.typicode.com/users")).data;

    const apiUsers = cleanArray(cleanArrayRow);

    return [...databaseUser, ...[apiUsers]]
}
const searchByName = async (name: unknown) => {
    const databaseUsersName = await User.findAll({where: {name}});

    const apiUsersName = (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data;

    const cleanApiUsersName = cleanArray(apiUsersName);

    const apiFilter = cleanApiUsersName.filter(user => user.name === name)

    return [...databaseUsersName, ...[apiFilter]]

}

const getUserById = async (id: string | number, source: string) => {
    const user = source === "api" ? (
        await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data : (
            await User.findByPk(id, {
                include: {
                    model: Post,
                    attributes: ["title", "body"]
                }
            })
        )

        return user;
}

const createUserData = async (name: string, email: string, phone: string) => {
    await User.create({name, email, phone})
}

export { 
    getAllUsers,
    searchByName,
    getUserById,
    createUserData}