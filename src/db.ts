import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import userModel from './models/userModel';
import PostModel from './models/postModel';

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/clonestack`, {logging: false})

userModel(sequelize);
PostModel(sequelize);

const { User, Post } = sequelize.models;

User.hasMany(Post);
Post.belongsTo(User);


export { sequelize, User, Post };