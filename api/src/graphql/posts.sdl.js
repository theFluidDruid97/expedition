export const schema = gql`
  type Post {
    id: Int!
    post: String!
    callsign: String!
    req_gear: String
    hours: String
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    post: String!
    callsign: String!
    req_gear: String
    hours: String
  }

  input UpdatePostInput {
    post: String
    callsign: String
    req_gear: String
    hours: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
