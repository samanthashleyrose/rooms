const express = require('express')
const routes = require('./controllers')
const session = require('express-session')

const app = express()
const PORT = process.env.PORT || 3001
const sessionConfig = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}

app.use(session(sessionConfig))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)

app.listen(PORT, ()=>{
    console.log('started er up, you say? you got it boss, whatever you say!')
})