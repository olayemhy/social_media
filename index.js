const express = require("express")
const mysql = require("mysql2")
const {Sequelize, DataTypes} = require("sequelize")
const bodyParser = require("body-parser")

const app = express()
const PORT = 4000

app.use(bodyParser.json())
const sequelize = new Sequelize("social_media", "root", "", {
    host: "localhost",
    dialect: "mysql"
}
)

const Comments = sequelize.define("comment",{
    comment_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    post_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

sequelize.sync()
.then(data => {
    console.log("model synced with table")
})
.catch(err => console.log("err:", error.message))


sequelize.authenticate()
.then(res => {
app.listen(PORT, () => console.log("server is running...") )
console.log("db connection established...")
})

.catch(err => console.log("connection cannot be established..."))
// app.get('/', (req, res) => { 
//     res.json({
//         status: "success",
//         message: "Welcome to my API"
//     })
// })

