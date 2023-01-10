export const schema = gql`
  type Member {
    id: Int!
    rank: String!
    last_name: String!
    first_name: String!
    certifications: String
    status: String
    createdAt: DateTime!
  }

  type Query {
    members: [Member!]! @requireAuth
    member(id: Int!): Member @requireAuth
  }

  input CreateMemberInput {
    rank: String!
    last_name: String!
    first_name: String!
    certifications: String
    status: String
  }

  input UpdateMemberInput {
    rank: String
    last_name: String
    first_name: String
    certifications: String
    status: String
  }

  type Mutation {
    createMember(input: CreateMemberInput!): Member! @requireAuth
    updateMember(id: Int!, input: UpdateMemberInput!): Member! @requireAuth
    deleteMember(id: Int!): Member! @requireAuth
  }
`
