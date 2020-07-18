const Posts = require('./models/post')
const resolvers = {
  Query: {
    async getPost(root, { _id }) {
      return await Posts.findById(_id)
    },
    async allPosts() {
      return await Posts.find()
    },
  },
  Mutation: {
    async createPost(root, { input }) {
      return await Posts.create(input)
    },
    async updatePost(root, { _id, input }) {
      return await Posts.findOneAndUpdate({ _id }, input, { new: true })
    },
    async deletePost(root, { _id }) {
      return await Posts.findOneAndRemove({ _id })
    },
  },
}

module.exports = resolvers
