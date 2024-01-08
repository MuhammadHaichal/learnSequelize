import { DataTypes, Sequelize } from "sequelize";
import { users } from "./models/users.js";


// ORM CREATE 
const createUser = async () => {
  const jane = await users.create({
    "nama": "muhammmad adam",
    "email": "adam@gmail.com",
    "password": "adam123"
  })
}

// createUser()


// ORM SELECT 
const selectUser = async () => {
  const jane = await users.findAll()
  const parse = JSON.stringify(jane)
  console.log(parse)
}

// selectUser()


// ORM UPDATE 
const updateUser = async () => {
  const jane = await users.update({
    "nama": "muhammad rizal fadilah",
    "email": "rizalfadilah07@gmail.com",
    "password": "rizalfadilah123"
  },{
      where: {
        "nama" : 'muhammmad adam'
      }
    }
  )
}

// updateUser()

// ORM DELETE
const deleteUser = async () => {
  const jane = await users.destroy({
    where: {
      // "nama" : "muhammad haichal"
      "id" : 1
    }
  })
}
  
// deleteUser()