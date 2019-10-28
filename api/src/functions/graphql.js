import { server } from '@hammerframework/hammer-api/graphql'
import { Photon } from '@generated/photon'

// Import new schema types
import * as users from 'src/graphql/users'

const photon = new Photon()

export const handler = server({
  types: [users],
  context: { photon },
}).createHandler()
