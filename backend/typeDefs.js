const { gql } = require('apollo-server-express')


const typeDefs = gql`
  type Post {
    _id: ID!
    title: String!
    date: Date
    content: String!
  }

  scalar Date

  type Query {
    getPost(_id: ID!): Post
    allPosts: [Post]
  }

  input PostInput {
    title: String!
    content: String!
  }

  input PostUpdateInput {
    title: String
    content: String
  }

  type Mutation {
    createPost(input: PostInput): Post
    updatePost(_id: ID!, inuput: PostUpdateInput): Post
    deletePost(_id: ID!): Post
  }
`

module.exports = typeDefs