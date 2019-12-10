import { server, makeMergedSchema } from '@hammerframework/api'
import { Photon } from '@generated/photon'

// Import new schema types
// import * as users from 'src/graphql/users.sdl'

// Include imported types here, ie. const schema = makeMergedSchema([users])
const schema = makeMergedSchema([])

const photon = new Photon()

export const handler = server({
  schema,
  context: { photon },
}).createHandler()
