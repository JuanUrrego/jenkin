const express = require('express')
const app = express()
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))


const proyecto = require('./routes/proyecto')


// middlewares
app.use('/api/proyecto', proyecto)


module.exports = app