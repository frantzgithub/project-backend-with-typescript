import { DataTypes } from 'sequelize';

const UserModel = (sequelize: any) => {
    sequelize.define("User", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {timestamps: false})
    
}

export default UserModel;