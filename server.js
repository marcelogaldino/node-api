require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(
    process.env.MONGO_URL, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false 
    }
)

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running')
})