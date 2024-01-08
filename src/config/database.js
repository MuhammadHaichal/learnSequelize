import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config()

const username = process.env.username
const password = process.env.password
const dbName = process.env.dbName



export const database = new Sequelize(dbName, username, password, {
  host: '127.0.0.1',
  dialect: 'mysql',
})


try {
    database.authenticate('database connected')
} catch (error) {
     console.error(`not connected to database ${error}`)
}




