const express = require("express")
const mysql = require("mysql2")
const Sequelize = require("sequelize")
const bodyParser = require("body-parser")

const app = express()
const PORT = 4000

app.use(bodyParser.json())
const sequelize = new Sequelize("social_media", "root", "", {
    host: "localhost",
    dialect: "mysql"
}
)


sequelize.authenticate()
.then(res => console.log("db connection established..."))
.catch(err => console.log("connection cannot be established..."))
// app.get('/', (req, res) => { 
//     res.json({
//         status: "success",
//         message: "Welcome to my API"
//     })
// })

app.listen(PORT, ()=> {
        console.log("api server is running...")
    })

