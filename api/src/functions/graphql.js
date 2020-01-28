import importAll from '@redwoodjs/core/dist/importAll.macro'
import { server, makeMergedSchema } from '@redwoodjs/api'
import { Photon } from '@prisma/photon'

// Collect all the GraphQL schema definitions and resolvers.
const specs = importAll('api', 'graphql')
const specArray = Object.keys(specs).map((file) => specs[file])
const schema = makeMergedSchema(specArray)

const photon = new Photon()

export const handler = server({
  schema,
  context: { photon },
}).createHandler()
