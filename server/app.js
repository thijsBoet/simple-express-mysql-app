const express = require('express')
const app = express();
const dotenv = require('dotenv')
const cors = require('cors')
const mysql = require('mysql')
dotenv.config();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))




// CREATE
app.post("/insert", (req, res) => {

})



// READ
app.get("/getAll", (req, res) => {
    console.log("get all")
})



// UPDATE




// DELETE




app.listen(process.env.PORT, () => console.log(`App is listening at http://localhost:${process.env.PORT}`))
