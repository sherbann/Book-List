const express = require('express')
const res = require('express/lib/response') 
const router = require('./router')
const app = express() 
const port = 3001 

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`Book List app at http://localhost:$(port)`)
})