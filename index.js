require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('twitter')
})

app.get('/login',(req,res) =>{

    res.send('<h2>this is the login page</h2>')
})
app.get('/youtube',(req,res) =>{
    res.send('<h2>Chai oR code</h2>')
    })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
