const express = require('express')
const mongoose = require('mongoose')

const Posts = require('./models/post')

const app = express()
const PORT = 8000 || process.env.PORT

mongoose.connect("mongodb://localhost:27017/blog",   { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
)
.then(() => console.log('db_connected'))
.catch((err) => console.error(err))

app.get('/', async(req, res) => {
    res.json({
        message: "my blog API v1"
    })
})

app.listen(PORT, ()=> {
    console.log(`the server is listening on PORT ${PORT}`)
})
