const express = require('express')
const app = express()
const append = require('./api/append')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/append', append)

app.listen(5210)