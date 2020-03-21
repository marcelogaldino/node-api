require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-qllit.mongodb.net/test`, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false 
    }
)

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(3000, () => {
    console.log('Server is running')
})