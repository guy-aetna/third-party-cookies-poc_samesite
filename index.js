const express = require('express')
const fs = require('fs')
const https = require('https')
const path = require('path')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
    res.cookie('my_cookie', 'testing', {
            expires: new Date(Date.now() + 900000),
            sameSite: "none",
            secure: true,
            httpOnly: true
        })
        .sendFile(path.join(__dirname + '/index.html'))
});

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  }, app)
  .listen(port, function () {
    console.log(`Example app listening on ${port} Go to https://localhost:${port}/`)
  })