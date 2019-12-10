import { server, makeMergedSchema } from '@hammerframework/api'
import { Photon } from '@prisma/photon'

// Import new schema types
import * as users from 'src/graphql/users'

const schema = makeMergedSchema([users])

const photon = new Photon()

export const handler = server({
  schema,
  context: { photon },
}).createHandler()
