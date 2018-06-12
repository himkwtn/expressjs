var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')

var indexRouter = require('./routes/index')
var mathsRouter = require('./routes/maths')
var sqlRouter = require('./routes/sql')
var app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/maths', mathsRouter)
app.use('/sql', sqlRouter)

app.listen(3000)
