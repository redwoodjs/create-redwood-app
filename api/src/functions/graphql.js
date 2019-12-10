import { server, makeMergedSchema } from '@hammerframework/api'
import { Photon } from '@generated/photon'

// Include new types here, ie. const schema = makeMergedSchema([users])
const schema = makeMergedSchema([])

const photon = new Photon()

export const handler = server({
  schema,
  context: { photon },
}).createHandler()
