const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config();

const carsRouter = require('./routes/api/cars')

const app = express() //веб сервер

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/cars', carsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const {status = 500, message = "Server error"} = err;
  res.status(status).json({ message })
})

module.exports = app
