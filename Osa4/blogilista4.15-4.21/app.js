require('dotenv').config()
const config = require('./utils/config')
const express = require('express')
const app = express()
const blogRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const bodyParser = require('body-parser')
const usersRouter = require('./controllers/users.js')
const loginRouter = require('./controllers/login')
var morgan = require('morgan')
const logger = require('./utils/logger')
logger.info('connecting to', config.MONGODB_URI)


const mongoose = require('mongoose')
const cors = require('cors')
app.use(express.static('build'))
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connection to MongoDB:', error.message)
    })
app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())
app.use(middleware.errorHandler)
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)
app.use('/api/blogs', blogRouter)
app.use(bodyParser.json())
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)


module.exports = app

