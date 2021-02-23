require('dotenv').config()
const config = require('./utils/config')
const express = require('express')
const app = express()
const blogRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const bodyParser = require('body-parser')
var morgan = require('morgan')
const logger = require('./utils/logger')
logger.info('connecting to', config.MONGODB_URI)


const mongoose = require('mongoose')
const cors = require('cors')
app.use(express.static('build'))
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())
app.use(middleware.errorHandler)
app.use(middleware.requestLogger)
app.use('/api/blogs', blogRouter)
app.use(bodyParser.json())


module.exports = app

