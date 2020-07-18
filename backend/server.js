const express = require('express')
const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const app = express()
const PORT = 8000 || process.env.PORT

mongoose
  .connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('db_connected'))
  .catch((err) => console.error(err))

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })


app.listen(PORT, () => {
  console.log(`the server is listening on PORT ${PORT}${server.graphqlPath}`)
})
