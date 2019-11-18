import { gql } from '@hammerframework/api'

export const schema = gql`
  type User {
    id: ID!
    email: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(email: String!): User
  }
`

export const resolvers = {
  Query: {
    users: (_root, _args, { photon }) => {
      return photon.users.findMany()
    },
  },
  Mutation: {
    createUser: (_root, { email }, { photon }) => {
      return photon.users.create({ data: { email } })
    },
  },
}
