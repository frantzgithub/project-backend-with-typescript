import { DataTypes } from "sequelize"

const PostModel = (sequelise: any) => {
    sequelise.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}

export default PostModel;