import { server, makeMergedSchema } from '@redwoodjs/api'
import { Photon } from '@prisma/photon'

// Include new types here, ie. const schema = makeMergedSchema([users])
const schema = makeMergedSchema([])

const photon = new Photon()

export const handler = server({
  schema,
  context: { photon },
}).createHandler()
