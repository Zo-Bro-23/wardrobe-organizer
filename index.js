const express = require('express')
const app = express()
const append = require('./api/append')

app.get('/append', append)

app.listen(5210)