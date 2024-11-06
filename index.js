require('dotenv').config()


const express = require('express')   // common js
// import express from "express"   // module js both are same based on coder
const app = express()
const port = 5000

app.get('/', (req, res) => {    //  / -> home route  agar request aa rha to response send kr do
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('ramdeepkesharwani')
})

app.get('/login', (req,res) => {
    res.send(`<h1>Please login at chai aur code with Ramdeep </h1>`)
})

app.get('/youtube', (req,res)=>{
    res.send(`<h2>Chai aur Code</h2>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

