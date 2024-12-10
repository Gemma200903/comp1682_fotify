import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'fotify', //db name
    'root', //username
    '123456', //pass
    {
        host: 'localhost',
        port: 3307,
        dialect: 'mysql'
    }
)

export default sequelize;