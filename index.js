const express = require('express')
const app = express()
require('dotenv').config()
require('./config/mongodb')

const api = require('./api')
const routers = require('./routers')
const port = process.env.PORT || 3000

app.set('view engine', 'pug')
app.set('views', './views')

app.use('/', express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api)
app.use('/', routers)

app.listen(port, () => console.log(`server running on port ${port}`))