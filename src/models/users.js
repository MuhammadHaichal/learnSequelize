import { database } from "../config/database.js";
import { DataTypes } from "sequelize";



export const users = database.define('users', {
  'nama': {
    type: DataTypes.STRING,
    allowNull: false
  },

  'email': {
    type: DataTypes.STRING,
    allowNull: false
  },

  'password': {
    type: DataTypes.STRING,
    allowNull: false
  }
})
