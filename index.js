const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const router = require  ("./src/routes/routes")


const app = express()
dotenv.config()

// middlewares
app.use(express.json())

// routes
app.use(router);       


// SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})


// API TEST
// app.post(("/test"), (req, res) => {
//     res.send(`signed up sucessfully`)
// })

// app.get(("/actisans"), (req, res) => {
//     return res.status(200).json(`Available`)
// })

//   DATABASE CONNECTION
const URL = process.env.MONGODB_URL;

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Database connected ')
})